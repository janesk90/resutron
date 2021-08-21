import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import 'mysql';

@NgModule({
  imports: [CommonModule],
})
class BaseDAO {
  identity!: string;
  shit = "SELECT * FROM ? WHERE ? = ?";
}
export class Accolades extends BaseDAO {
  identity = 'accolades_id';
}
export class AccoladesToPeople extends BaseDAO {
  identity = 'accolades_to_people_id';
}
export class Companies extends BaseDAO {
  identity = 'companies_id';
}
export class Persons extends BaseDAO {
  identity = 'persons_id';
}
export class Positions extends BaseDAO {
  identity = 'positions_id';
}
export class PositionsNotes extends BaseDAO {
  identity = 'positions_notes_id';
}
export class Skills extends BaseDAO {
  identity = 'skills_id';
}
export class SkillsToPersons extends BaseDAO {
  identity = 'skills_to_persons_id';
}
export class DataAccessorsModule {}
