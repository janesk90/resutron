import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Connection, createConnection, ConnectionOptions } from 'mysql2';
// @ts-ignore
import { promisify } from 'util';

@NgModule({
  imports: [CommonModule],
})
export class SharedDomainModule {}
export interface EntityProps { }
export interface DataAccessor<EntityProps> {

  getAll(): Promise<EntityProps[]>;

  getOne(id: number): Promise<EntityProps>;

  getMany(ids: number[]): Promise<EntityProps[]>;

  createOne(e: EntityProps): Promise<EntityProps>;

  // createMany(es: T[]): Promise<T[]>;

  updateOne(e: EntityProps): Promise<EntityProps>;

  //updateMany(es: T[]): Promise<T[]>;

  removeOne(id: number): Promise<EntityProps>;

  //removeMany(ids: number[]): Promise<T[]>;

}
export abstract class DAO<EntityProps> implements DataAccessor<EntityProps> {
  connectionConfig: ConnectionOptions;
  connection: Connection;
  entity_name!: string;
  unique_identifier!: string;
  constructor(connectionConfig: ConnectionOptions) {
    this.connectionConfig = connectionConfig;
    this.connection = createConnection(connectionConfig);
  }

  async getAll(): Promise<EntityProps[]> {
    let q = "SELECT * FROM ??;";
    let query = promisify(this.connection.query).bind(this.connection);
    try {
      let r: EntityProps[] = await query({ sql: q, values: [this.entity_name] });
      if (!r) {
        throw Error("entity not found");
      }
      return r;
    }
    catch (x) {
      throw x;
    } finally {
      this.connection.end();
    }
  }

  async getOne(id: number): Promise<EntityProps> {
    let q = "SELECT * FROM ?? WHERE ?? = ?;";
    let query = promisify(this.connection.query).bind(this.connection);
    try {
      let r: EntityProps[] = await query({ sql: q, values: [this.entity_name, this.unique_identifier, id] })
      if (!r || r.length > 1) {
        throw Error("entity not found");
      }
      let p = r[0];
      return p;
    }
    catch (x) {
      throw x;
    } finally {
      this.connection.end();
    }
  }

  async getMany(ids: number[]): Promise<EntityProps[]> {
    let q = "SELECT * FROM ?? WHERE ?? IN ?;";
    let query = promisify(this.connection.query).bind(this.connection);
    try {
      let r: EntityProps[] = await query({ sql: q, values: [this.entity_name, this.unique_identifier, ids] })
      if (!r) {
        throw Error("entity not found");
      }
      return r;
    }
    catch (x) {
      throw x;
    } finally {
      this.connection.end();
    }
  }

  async createOne(e: EntityProps): Promise<EntityProps> {
    let q = "INSERT INTO ?? SET ?;"
    let query = promisify(this.connection.query).bind(this.connection);
    try {
      let r = await query({ sql: q, values: [this.entity_name, e] });
      return this.getOne(r.insertId);
    } catch (x) {
      throw x;
    } finally {
      this.connection.end();
    }
  }

  async updateOne(e: EntityProps): Promise<EntityProps> {
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
    } finally {
      this.connection.end();
    }
  }

  async removeOne(id: number): Promise<EntityProps> {
    let q = "DELETE FROM ?? WHERE ?? = ?;"
    let query = promisify(this.connection.query).bind(this.connection);
    try {
      let r: EntityProps = await this.getOne(id);
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
    } finally {
      this.connection.end();
    }
  }

  async getBy(field: string, id: number): Promise<EntityProps[]> {
    let q = "SELECT * FROM ?? WHERE ?? = ?;"
    let query = promisify(this.connection.query).bind(this.connection);
    try {
      let r: EntityProps[] = await query({ sql: q, values: [this.entity_name, field, id] });
      return r;
    }
    catch (x) {
      throw x;
    } finally {
      this.connection.end();
    }
  }

  getEntityUniqueIdentifierValue(e: any): number {
    return e[this.unique_identifier];
  }
}