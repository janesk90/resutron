import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import 'mysql';
import { Persons as PersonType } from '@resu/entity-types';
import { createConnection } from 'mysql';

@NgModule({
  imports: [CommonModule],
})
class BaseDAO {
  name!: string;
  identity!: string;
  get(id: Int16Array) {
    // SELECT * FROM ? WHERE ? = ?;
    var connection = createConnection('')
    connection.query(
      "SELECT ?? FROM ?? WHERE ?? = ?", 
      ['*', this.name, this.identity, id], 
      (err, results) => {
      // ...
      }
    );
  }
  put() {
    // UPDATE 
  }
  post() {

  }
  delete(id: Int16Array) {
    // DELETE FROM ? WHERE ? = ?;
  }
}
export class Accolades extends BaseDAO {
  identity = 'accolades_id';
  name = 'acolades';
}
export class AccoladesToPeople extends BaseDAO {
  identity = 'accolades_to_people_id';
  name = 'accolades_to_people';
}
export class Companies extends BaseDAO {
  identity = 'companies_id';
  name = 'companies';
}
export class Persons extends BaseDAO {
  identity = 'persons_id';
  name = 'persons';
}
export class Positions extends BaseDAO {
  identity = 'positions_id';
  name = 'positions';
}
export class PositionsNotes extends BaseDAO {
  identity = 'positions_notes_id';
  name = 'positions_notes';
}
export class Skills extends BaseDAO {
  identity = 'skills_id';
  name = 'skills';
}
export class SkillsToPersons extends BaseDAO {
  identity = 'skills_to_persons_id';
  name = 'skills_to_persons';
}