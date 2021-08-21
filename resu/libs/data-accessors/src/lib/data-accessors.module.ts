import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import 'mysql';

@NgModule({
  imports: [CommonModule],
})
class BaseDAO {

}
export class Accolades extends BaseDAO {

}
export class AccoladesToPeople extends BaseDAO {

}
export class Companies extends BaseDAO {

}
export class Persons extends BaseDAO {

}
export class Positions extends BaseDAO {

}
export class PositionsNotes extends BaseDAO {

}
export class Skills extends BaseDAO {

}
export class SkillsToPersons extends BaseDAO {

}
export class DataAccessorsModule {}
