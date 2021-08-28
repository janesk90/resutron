import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { promisify } from 'util';
import { Connection, createConnection, Query, ConnectionOptions } from 'mysql2';

@NgModule({
  imports: [CommonModule],
})
export class ResumeEntityModule {

}
// -----
export interface EntityProps {

}
interface AccoladeTypesProps {

}
interface AccoladesProps {

}
interface AccoladesToPersonsProps {

}
interface CompaniesProps {

}
export interface PersonsProps extends EntityProps {
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

export abstract class ResEntity<E extends EntityProps> {
	props: E;
	constructor(props: E) {
		this.props = props
	}
}

export class ResEnt<E> {
  props: E;
  constructor(props: E) {
    this.props = props;
  }
}

export class PersEnt extends ResEnt<PersonsProps> {

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
    for (let k in this.props) {
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

export class MST<E> {
  connection: Connection;
  table_name: string;
  unique_identifier: string;
  constructor(connectionConfig: ConnectionOptions, t: string, u: string) {
    this.connection = createConnection(connectionConfig);
    this.table_name = t;
    this.unique_identifier = u;
  }
  async getOne(id: number): Promise<E> {
    let q = "SELECT * FROM ?? WHERE ?? = ?;";
    const query = promisify(this.connection.query).bind(this.connection);
    try {
      let r: E[] = await query({ sql: q, values: [this.table_name, this.unique_identifier, id] })
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
}
// -----
