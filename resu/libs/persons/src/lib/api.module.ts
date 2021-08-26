import { Connection, createConnection } from 'mysql';

export class PersonEntity {

}

interface PersonDAO { // one day an abstract class instead of an interface probably
    getPersonById(id: Int16Array): PersonEntity;
    getPersonsById(ids: [Int16Array]): [PersonEntity];
    getAllPersons(): [PersonEntity];
}

export class MySQLPersonDAO implements PersonDAO { // for now I guess these are going to be sql implementations of daos, but like the types are all agreed upon at least
    connection: Connection;
    constructor(connectionConfig: any){
        this.connection = createConnection(connectionConfig)
    }
    getPersonById(id: Int16Array): PersonEntity {
        return new PersonEntity();
    }
    getPersonsById(ids: [Int16Array]): [PersonEntity] {
        return [new PersonEntity()];
    }
    getAllPersons(): [PersonEntity] {
        return [new PersonEntity()];
    }
}