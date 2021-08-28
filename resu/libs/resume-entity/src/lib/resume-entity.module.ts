import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Connection, createConnection, Query, ConnectionOptions} from 'mysql2';
import { promisify } from 'util';

@NgModule({
  imports: [CommonModule],
})
export class ResumeEntityModule {

}
// -----
interface AccoladeTypesProps {

}
interface AccoladesProps {

}
interface AccoladesToPersonsProps {

}
interface CompaniesProps {

}
interface PersonsProps {
  persons_id: number;
  persons_firstname: string;
  persons_middlename?: string;
  persons_lastname: string;
  persons_phone: string;
}
interface PositionsProps {

}
interface PositionsNotesProps {

}
interface SkillsProps {

}
interface SkillsToPersonsProps {

}
// -----
export abstract class ResumeEntity {
  props: any;
  static entityName: string;
  static uniqueIdentifier: string;
  constructor(props: any) {
    this.props = props;
  }
  getKeys() {
    const ks = [];
    for(let k in this.props) {
      ks.push(k);
    }
    return ks;
  }
  static getName() {
    return this.entityName;
  }
}
export class Persons extends ResumeEntity {
  static entityName: string = "persons";
  static uniqueIdentifier = "persons_id";
  constructor(props: PersonsProps) {
    super(props);
  }
}
// -----
export interface DataAccessor<T extends ResumeEntity> {

  getOne(id: number): Promise<T>;
  /*
  getMany(ids: Int16Array[]): Promise<T>;
  
  createOne(e: T): Promise<T>;
  
  createMany(es: T[]): Promise<T[]>;
  
  updateOne(e: T): Promise<T>;
  
  updateMany(es: T[]): Promise<T[]>;
  
  removeOne(id: Int16Array): Promise<T>;
  
  removeMany(ids: Int16Array[]): Promise<T[]>;
  */
}

export class MySQLDataAccessorModule<T extends ResumeEntity> implements DataAccessor<ResumeEntity> {
  connection!: Connection;
  t: any;
  constructor(connectionConfig: ConnectionOptions) {
    this.connection = createConnection(connectionConfig);
    this.t = typeof ResumeEntity;
  }
  async getOne(id: number): Promise<T> {
    let q ="SELECT * FROM ?? WHERE ?? = ?;";
    const query = promisify(this.connection.query).bind(this.connection);
    try {
    let r: any = await query({sql:q, values:['persons', 'persons_id', id]})
    if(!(r.result)) {
      return r;
    }
    let p = r.result[0];
    let d: any = {};
    for(let k of p) {
      d[k] = p[k];
    }
    return new this.t(d); }
    catch (x) {
      throw x;
    }
  }
  /*
  getMany(ids: Int16Array[]): Promise<T[]> {
    "SELECT * FROM ?? WHERE ?? IN ?;"
  }
  createOne(e: T): Promise<T> {
    "INSERT INTO ?? ?? VALUES ?;"
  }
  createMany(es: T[]): Promise<T[]> {
    "INSERT INTO ?? ?? VALUES ?;"
  }
  updateOne(e: T): Promise<T> {

  }
  updateMany(es: T[]): Promise<T[]> {

  }
  removeOne(id: Int16Array): Promise<T> {

  }
  removeMany(ids: Int16Array[]): Promise<T[]> {

  }
  */
}
// -----
