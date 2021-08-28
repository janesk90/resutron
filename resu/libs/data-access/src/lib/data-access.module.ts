import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Connection, ConnectionConfig, createConnection} from 'mysql';

@NgModule({
  imports: [CommonModule],
})
class ResumeEntity {

}
/*
export interface DataAccessor<T extends ResumeEntity> {

  getOne(id: Int16Array): Promise<T>;
  
  getMany(ids: Int16Array[]): Promise<T>;
  
  createOne(e: T): Promise<T>;
  
  createMany(es: T[]): Promise<T[]>;
  
  updateOne(e: T): Promise<T>;
  
  updateMany(es: T[]): Promise<T[]>;
  
  removeOne(id: Int16Array): Promise<T>;
  
  removeMany(ids: Int16Array[]): Promise<T[]>;
}
export class MySQLDataAccessorModule<T> implements DataAccessor<T> {
  connection!: Connection;
  constructor(connectionConfig: ConnectionConfig) {
    this.connection = createConnection(connectionConfig);
  }
  getOne(id: Int16Array): T {
    "SELECT * FROM ?? WHERE ?? = ?;"
    this.connection.query()
  }
  getMany(ids: Int16Array[]) {
    "SELECT * FROM ?? WHERE ?? IN ?;"
  }
  createOne(e: T): T {
    "INSERT INTO ?? ?? VALUES ?;"
  }
  createMany(es: T[]): T[] {
    "INSERT INTO ?? ?? VALUES ?;"
  }
  updateOne(e: T): T {

  }
  updateMany(es: T[]): T[] {

  }
  removeOne(id: Int16Array): T {

  }
  removeMany(ids: Int16Array[])
}*/
