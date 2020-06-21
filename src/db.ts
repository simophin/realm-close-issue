import Realm from 'realm';

const CarSchema = {
    name: 'Car',
    properties: {
        make: 'string',
        model: 'string',
        miles: { type: 'int', default: 0 },
    }
};

const PersonSchema = {
    name: 'Person',
    properties: {
        name: 'string',
        birthday: 'date',
        cars: 'Car[]', // a list of Cars
        picture: 'data?'  // optional property
    }
};

export class Database {
    private db: Realm;

    async open() {
        this.db = await Realm.open({schema: [CarSchema, PersonSchema]});
    }

    close() {
        this.db.close();
    }
}