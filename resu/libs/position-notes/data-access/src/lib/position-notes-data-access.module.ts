import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PositionNotes } from '@resu/position-notes/domain'
import { ConnectionOptions } from 'mysql2';
import { DAO } from '@resu/shared/domain';

@NgModule({
  imports: [CommonModule],
})
export class PositionNotesDataAccessModule {}
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