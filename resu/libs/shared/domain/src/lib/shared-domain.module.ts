import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { promisify } from 'util';
import { Connection, createConnection, ConnectionOptions } from 'mysql2';

@NgModule({
  imports: [CommonModule],
})
export class SharedDomainModule {}
export interface EntityProps { }
export interface DataAccessor<T extends EntityProps> {

  getAll(): Promise<T[]>;

  getOne(id: number): Promise<T>;

  getMany(ids: number[]): Promise<T[]>;

  createOne(e: T): Promise<T>;

  // createMany(es: T[]): Promise<T[]>;

  updateOne(e: T): Promise<T>;

  //updateMany(es: T[]): Promise<T[]>;

  removeOne(id: number): Promise<T>;

  //removeMany(ids: number[]): Promise<T[]>;

}
export abstract class DAO<T extends EntityProps> implements DataAccessor<T> {
  connectionConfig: ConnectionOptions;
  connection: Connection;
  entity_name!: string;
  unique_identifier!: string;
  constructor(connectionConfig: ConnectionOptions) {
    this.connectionConfig = connectionConfig;
    this.connection = createConnection(connectionConfig);
  }

  async getAll(): Promise<T[]> {
    let q = "SELECT * FROM ??;";
    let query = promisify(this.connection.query).bind(this.connection);
    try {
      let r: T[] = await query({ sql: q, values: [this.entity_name] });
      if (!r) {
        throw Error("entity not found");
      }
      return r;
    }
    catch (x) {
      throw x;
    }
  }

  async getOne(id: number): Promise<T> {
    let q = "SELECT * FROM ?? WHERE ?? = ?;";
    let query = promisify(this.connection.query).bind(this.connection);
    try {
      let r: T[] = await query({ sql: q, values: [this.entity_name, this.unique_identifier, id] })
      if (!r) {
        throw Error("entity not found");
      }
      let p = r[0];
      return p;
    }
    catch (x) {
      throw x;
    }
  }

  async getMany(ids: number[]): Promise<T[]> {
    let q = "SELECT * FROM ?? WHERE ?? IN ?;";
    let query = promisify(this.connection.query).bind(this.connection);
    try {
      let r: T[] = await query({ sql: q, values: [this.entity_name, this.unique_identifier, ids] })
      if (!r) {
        throw Error("entity not found");
      }
      return r;
    }
    catch (x) {
      throw x;
    }
  }

  async createOne(e: T): Promise<T> {
    let q = "INSERT INTO ?? SET ?;"
    let query = promisify(this.connection.query).bind(this.connection);
    try {
      let r = await query({ sql: q, values: [this.entity_name, e] });
      return this.getOne(r.insertId);
    } catch (x) {
      throw x;
    }
  }

  async updateOne(e: T): Promise<T> {
    let q = "UPDATE ?? SET ? WHERE ?? = ?;"
    let query = promisify(this.connection.query).bind(this.connection);
    try {
      let r = await query({ sql: q, values: [this.entity_name, e, this.unique_identifier, this.getEntityUniqueIdentifierValue(e)] });
      try {
        return await this.getOne(this.getEntityUniqueIdentifierValue(e));
      }
      catch (x) {
        throw x;
      }
    } catch (x) {
      throw x;
    }
  }

  async removeOne(id: number): Promise<T> {
    let q = "DELETE FROM ?? WHERE ?? = ?;"
    let query = promisify(this.connection.query).bind(this.connection);
    try {
      let r: T = await this.getOne(id);
      try {
        let x = await query({ sql: q, values: [this.entity_name, this.unique_identifier, id] });
        if (x.affectedRows == 1) {
          return r;
        }
        else {
          throw new Error("did not affect exactly 1 row");
        }
      } catch (x) {
        throw x;
      }
    }
    catch (x) {
      throw x;
    }
  }

  getEntityUniqueIdentifierValue(e: any): number {
    return e[this.unique_identifier];
  }
}