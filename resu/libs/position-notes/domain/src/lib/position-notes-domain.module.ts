import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConnectionOptions } from 'mysql2';
import { DAO } from '../../../../shared/domain/src/lib/shared-domain.module';
import { UiPositionNotesDisplayComponent } from './ui-position-notes-display/ui-position-notes-display.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    UiPositionNotesDisplayComponent
  ],
})
export class PositionNotesDomainModule {}
export interface PositionNotesProps {
  readonly position_notes_id?: number;
  position_notes_text: string;
  positions_id: number;
}
export class PositionNotes implements PositionNotesProps {
  readonly position_notes_id?: number;
  position_notes_text: string;
  positions_id: number;
  constructor(p: PositionNotesProps) {
    this.position_notes_id = p.position_notes_id;
    this.position_notes_text = p.position_notes_text;
    this.positions_id = p.positions_id;
  }
}
export class PositionNotesDAO extends DAO<PositionNotes> {
  constructor(connectionConfig: ConnectionOptions) {
    super(connectionConfig);
    this.entity_name = 'position_notes';
    this.unique_identifier = 'position_notes_id';
  }
  async getByPositionsId(positions_id: number): Promise<PositionNotes[]> {
    return this.getBy('positions_id', positions_id);
  }
}