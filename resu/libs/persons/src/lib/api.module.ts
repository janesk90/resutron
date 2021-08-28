import { Connection, createConnection, Query } from 'mysql';

export class PersonEntity {
    persons_id: Int16Array;
    persons_firstname: string;
    persons_middle: string;
    persons_lastname: string;
    persons_phone: string
    constructor(id: Int16Array, fname: string, mname: string, lname: string, phone: string) {
        this.persons_id = id;
        this.persons_firstname = fname;
        this.persons_middle = mname;
        this.persons_lastname = lname;
        this.persons_phone = phone;
    }
}

interface PersonDAO { // one day an abstract class instead of an interface probably
    getPersonById(id: Int16Array): Promise<PersonEntity>;
    getPersonsById(ids: Int16Array): Promise<PersonEntity[]>;
    getAllPersons(): Promise<PersonEntity[]>;
}

export class MySQLPersonDAO implements PersonDAO { // for now I guess these are going to be sql implementations of daos, but like the types are all agreed upon at least
    // but who cares that it's implemented using MySQL? shouldn't this be reflective of the returned data?
    connection: Connection;
    constructor(connectionConfig: any){
        this.connection = createConnection(connectionConfig)
    }

    _crankOutPerson(p: any) {
        return new PersonEntity(p.persons_id, p.persons_firstname, p.persons_middlename, p.persons_lastname, p.persons_phone);
    }

    async getPersonById(id: Int16Array): Promise<PersonEntity> {
        let result = this.connection.query("SELECT * FROM persons WHERE persons_id = ?", [id]);
        if(result.){}
    }
    getPersonsById(ids: Int16Array[]) {
        this.connection.query("SELECT * FROM persons WHERE persons_id = ?", ids, (error, results): PersonEntity => {
            if (error || results.length != 1) {
                throw error;
            }
            let p = results[0];
            return this._crankOutPerson(p);
        });
    }
    getAllPersons(): Promise<PersonEntity[]> {
        return [new PersonEntity()];
    }
}