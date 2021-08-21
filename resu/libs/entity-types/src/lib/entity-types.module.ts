import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
})
export class Accolades {
  accolades_id: Int16Array;
  accolades_name: string;
  constructor(id: Int16Array, name: string) {
    this.accolades_id = id;
    this.accolades_name = name;
  }
}
export class AccoladesToPeople {
  accolades_to_people_id: Int16Array;
  accolades_id: Int16Array;
  persons_id: Int16Array;
  constructor(id: Int16Array, accolade: Int16Array, person: Int16Array) {
    this.accolades_to_people_id = id;
    this.accolades_id = accolade;
    this.persons_id = person;
  }
}
export class Companies {
  companies_id: Int16Array;
  companies_name: string;
  constructor(id: Int16Array, name: string) {
    this.companies_id = id;
    this.companies_name = name;
  }
}
export class Persons {
  persons_id: Int16Array;
  persons_firstname: string;
  persons_middlename: string | undefined;
  persons_lastname: string;
  persons_phone: string;
  constructor(id: Int16Array, firstname: string, middlename: string|undefined, lastname:string, phone:string) {
    this.persons_id = id;
    this.persons_firstname = firstname;
    this.persons_middlename = middlename;
    this.persons_lastname = lastname;
    this.persons_phone = phone;
  }
}
export class Positions {
  positions_id: Int16Array;
  positions_title: string;
  companies_id: Int16Array;
  persons_id: Int16Array;
  constructor(id: Int16Array, title: string, company: Int16Array, person: Int16Array) {
    this.positions_id = id;
    this.positions_title = title;
    this.persons_id = person;
    this.companies_id = company;
  }
}
export class PositionsNotes {
  positions_notes_id: Int16Array;
  positions_notes_text: string;
  positions_id: Int16Array;
  constructor(id: Int16Array, text: string, position: Int16Array) {
    this.positions_notes_id = id;
    this.positions_notes_text = text;
    this.positions_id = position;
  }
}
export class Skills {
  skills_id: Int16Array;
  skills_name: string;
  constructor(id: Int16Array, name: string) {
    this.skills_id = id;
    this.skills_name = name;
  }
}
export class SkillsToPersons {
  skills_to_persons_id: Int16Array;
  skills_id: Int16Array;
  persons_id: Int16Array;
  constructor(id: Int16Array, skills_id: Int16Array, persons_id: Int16Array) {
    this.skills_to_persons_id = id;
    this.skills_id = skills_id;
    this.persons_id = persons_id;
  }
}
export class EntityTypesModule {}
