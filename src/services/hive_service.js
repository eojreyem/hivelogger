import { SQLite } from '@ionic-native/sqlite';

export class HiveService {
    constructor(dbInstance) {
        this.dbInstance = dbInstance;
    }

    async addHive(in_apiary_id, number) {
        try {
            const res = await this.dbInstance.executeSql('INSERT INTO hives (in_apiary_id, number) VALUES (?, ?)', [in_apiary_id, number]);
            return res;
        } catch (error) {
            console.error('Unable to add hive', error);
        }
    }
    
    async getAllHives() {
        try {
            const res = await this.dbInstance.executeSql('SELECT * FROM hives', []);
            let hives = [];
            for (let i = 0; i < res.rows.length; i++) {
                hives.push(res.rows.item(i));
            }
            return hives;
        } catch (error) {
            console.error('Unable to get all hives', error);
            return [];
        }
    }
}
