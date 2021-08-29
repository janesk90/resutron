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
interface EntityProps { }
interface AccoladeTypesProps {
  readonly accolade_types_id?: number;
  accolade_types_name: string;
}
interface AccoladesProps {
  readonly accolades_id?: number;
  accolades_name: string;
  accolade_types_id: number;
}
interface AccoladesToPersonsProps {
  readonly accolades_to_persons_id?: number;
  accolades_id: number;
  persons_id: number;
}
interface CompaniesProps {
  readonly companies_id?: number;
  companies_name: string;
}
interface PersonsProps extends EntityProps {
  readonly persons_id?: number;
  persons_firstname: string;
  persons_middlename?: string;
  persons_lastname: string;
  persons_phone: string;
}
interface PositionsProps {
  readonly positions_id?: number;
  positions_title: string;
  positions_start: Date;
  positions_end: Date;
  companies_id: number;
  persons_id: number;
}
interface PositionNotesProps {
  readonly position_notes_id?: number;
  position_notes_text: string;
  positions_id: number;
}
interface SkillsProps {
  readonly skills_id?: number;
  skills_name: string;
}
interface SkillsToPersonsProps {
  readonly skills_to_persons_id?: number;
  skills_id: number;
  persons_id: number;
}

class AccoladeTypes implements AccoladeTypesProps {
  readonly accolade_types_id?: number;
  accolade_types_name: string;
  constructor(p: AccoladeTypesProps) {
    this.accolade_types_id = p.accolade_types_id;
    this.accolade_types_name = p.accolade_types_name;
  }
}
class Accolades implements AccoladesProps {
  readonly accolades_id?: number;
  accolades_name: string;
  accolade_types_id: number;
  constructor(p: AccoladesProps) {
    this.accolades_id = p.accolades_id;
    this.accolades_name = p.accolades_name;
    this.accolade_types_id = p.accolade_types_id;
  }
}
class AccoladesToPersons implements AccoladesToPersonsProps {
  readonly accolades_to_persons_id?: number;
  accolades_id: number;
  persons_id: number;
  constructor(p: AccoladesToPersonsProps) {
    this.accolades_to_persons_id = p.accolades_to_persons_id;
    this.accolades_id = p.accolades_id;
    this.persons_id = p.persons_id;
  }
}
class Companies implements CompaniesProps {
  readonly companies_id?: number;
  companies_name: string;
  constructor(p: CompaniesProps) {
    this.companies_id = p.companies_id;
    this.companies_name = p.companies_name;
  }
}
class Persons implements PersonsProps {
  readonly persons_id?: number;
  persons_firstname: string;
  persons_middlename?: string;
  persons_lastname: string;
  persons_phone: string;
  constructor(p: PersonsProps) {
    this.persons_id = p.persons_id;
    this.persons_firstname = p.persons_firstname;
    this.persons_middlename = p.persons_middlename;
    this.persons_lastname = p.persons_lastname;
    this.persons_phone = p.persons_phone;
  }
}
class Positions implements PositionsProps {
  readonly positions_id?: number;
  positions_title: string;
  positions_start: Date;
  positions_end: Date;
  companies_id: number;
  persons_id: number;
  constructor(p: PositionsProps) {
    this.positions_id = p.positions_id;
    this.positions_title = p.positions_title;
    this.positions_start = p.positions_start;
    this.positions_end = p.positions_end;
    this.companies_id = p.companies_id;
    this.persons_id = p.persons_id;
  }
}
class PositionNotes implements PositionNotesProps {
  readonly position_notes_id?: number;
  position_notes_text: string;
  positions_id: number;
  constructor(p: PositionNotesProps) {
    this.position_notes_id = p.position_notes_id;
    this.position_notes_text = p.position_notes_text;
    this.positions_id = p.positions_id;
  }
}
class Skills implements SkillsProps {
  readonly skills_id?: number;
  skills_name: string;
  constructor(p: SkillsProps) {
    this.skills_id = p.skills_id;
    this.skills_name = p.skills_name;
  }
}
class SkillsToPersons implements SkillsToPersonsProps {
  readonly skills_to_persons_id?: number;
  skills_id: number;
  persons_id: number;
  constructor(p: SkillsToPersonsProps) {
    this.skills_to_persons_id = p.skills_to_persons_id;
    this.skills_id = p.skills_id;
    this.persons_id = p.persons_id;
  }
}

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
export class AccoladesDAO extends DAO<Accolades> {
  constructor(connectionConfig: ConnectionOptions) {
    super(connectionConfig);
    this.entity_name = 'accolades';
    this.unique_identifier = 'accolades_id';
  }
}
export class AccoladeTypesDAO extends DAO<AccoladeTypes> {
  constructor(connectionConfig: ConnectionOptions) {
    super(connectionConfig);
    this.entity_name = 'accolade_types';
    this.unique_identifier = 'accolade_types_id';
  }
}
export class AccoladesToPersonsDAO extends DAO<AccoladesToPersons> {
  constructor(connectionConfig: ConnectionOptions) {
    super(connectionConfig);
    this.entity_name = 'accolades_to_persons';
    this.unique_identifier = 'accolades_to_persons_id';
  }
}
export class CompaniesDAO extends DAO<Companies> {
  constructor(connectionConfig: ConnectionOptions) {
    super(connectionConfig);
    this.entity_name = 'companies';
    this.unique_identifier = 'companies_id';
  }
}
export class PersonsDAO extends DAO<Persons> {
  constructor(connectionConfig: ConnectionOptions) {
    super(connectionConfig);
    this.entity_name = 'persons';
    this.unique_identifier = 'persons_id';
  }
}
export class PositionsDAO extends DAO<Positions> {
  constructor(connectionConfig: ConnectionOptions) {
    super(connectionConfig);
    this.entity_name = 'positions';
    this.unique_identifier = 'positions_id';
  }
}
export class PositionNotesDAO extends DAO<PositionNotes> {
  constructor(connectionConfig: ConnectionOptions) {
    super(connectionConfig);
    this.entity_name = 'position_notes';
    this.unique_identifier = 'position_notes_id';
  }
}
export class SkillsDAO extends DAO<Skills> {
  constructor(connectionConfig: ConnectionOptions) {
    super(connectionConfig);
    this.entity_name = 'skills';
    this.unique_identifier = 'skills_id';
  }
}
export class SkillsToPersonsDAO extends DAO<SkillsToPersons> {
  constructor(connectionConfig: ConnectionOptions) {
    super(connectionConfig);
    this.entity_name = 'skills_to_persons';
    this.unique_identifier = 'skills_to_persons_id';
  }
}