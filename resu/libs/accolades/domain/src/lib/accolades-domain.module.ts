import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntityProps } from '../../../../shared/domain/src/lib/shared-domain.module';

@NgModule({
  imports: [CommonModule],
})
export class AccoladesDomainModule {}
export interface AccoladesProps extends EntityProps {
  readonly accolades_id?: number;
  accolades_name: string;
  accolade_types_id: number;
}
export class Accolades implements AccoladesProps {
  readonly accolades_id?: number;
  accolades_name: string;
  accolade_types_id: number;
  constructor(p: AccoladesProps) {
    this.accolades_id = p.accolades_id;
    this.accolades_name = p.accolades_name;
    this.accolade_types_id = p.accolade_types_id;
  }
}
export class AccoladesValidator {
  static validateAccoladesName(name: string) {
    return null != name && name.length <= 100;
  }
}
export class C {
  f?: string;
  C() {
    
  }
}
// class D extends C {}
// class X<C> {}
// class Y<D> extends X<C extends {a:"s"}> {};
export interface IC extends C {

}
