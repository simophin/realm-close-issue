import 'core-js/stable';
import 'regenerator-runtime/runtime';
import {Database} from '../db';

describe('realmTest', () => {
    let db: Database;
    beforeEach(() => {
        db = new Database();
    });

    afterEach(() => {
        db.close();
    });

    it('should exist', async () => {
        await db.open();
    });
});