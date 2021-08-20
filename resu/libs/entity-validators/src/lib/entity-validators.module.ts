/**
 * plan is to put all the validations in here so that I can use them on an individual basis in components
 * or for validation on way to backend
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
})
export class Accolades {
  validateAccoladesName(name: string) {
    return null != name && name.length <= 100;
  }
}
export class AccoladesToPeople {

}
export class Companies {
  validateCompaniesName(name: string): boolean {
    return null != name && name.length <= 255;
  }
}
export class Persons {
  validatePersonsFirstName(firstname: string): boolean {
    return null != firstname && firstname.length <= 100;
  }
  validatePersonsLastName(lastname: string): boolean {
    return null != lastname && lastname.length <= 100;
  }
  validatePersonsMiddleName(middlename: string): boolean {
    return middlename == null || middlename.length <= 100;
  }
  validatePersonsPhone(phone: string): boolean {
    return /^1\-[0-9]{3}\-[0-9]{3}\-[0-9]{4}$/.test(phone);
  }
}
export class Positions {
  validatePositionsTitle(title: string): boolean {
    return null != title && title.length <= 255;
  }
}
export class PositionsNotes {

}
export class Skills {
  validateSkillsName(name: string): boolean {
    return null != name && name.length <= 255;
  }
}
export class SkillsToPeople {

}
export class EntityValidatorsModule {}
