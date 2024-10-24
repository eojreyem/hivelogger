import { SQLite } from '@ionic-native/sqlite';

export class ApiaryService {
    constructor(dbInstance) {
        this.dbInstance = dbInstance;
    }

    async addApiary(name) {
        try {
            console.log('ADD!');
            const res = await this.dbInstance.executeSql('INSERT INTO apiaries (name) VALUES (?)', [name]);
            return res;
        } catch (error) {
            console.error('Unable to add apiary', error);
        }
    }

    async getApiaryById(apiaryId) {
        try {
            const res = await this.dbInstance.executeSql('SELECT * FROM apiaries WHERE id = ?', [apiaryId]);
            if (res.rows.length > 0) {
                return res.rows.item(0);
            } else {
                return null;
            }
        } catch (error) {
            console.error('Unable to get apiary by ID', error);
            return null;
        }
    }

    async getHivesInApiaryById(apiaryId) {
        try {
            const res = await this.dbInstance.executeSql('SELECT * FROM hives WHERE in_apiary_id = ?', [apiaryId]);
            let hives = [];
            for (let i = 0; i < res.rows.length; i++) {
                hives.push(res.rows.item(i));
            }
            return hives;
        } catch (error) {
            console.error('Unable to get hives for apiary', error);
            return [];
        }
    }

    async getApiaries() {
        try {
            const res = await this.dbInstance.executeSql('SELECT * FROM apiaries', []);
            let apiaries = [];
            for (let i = 0; i < res.rows.length; i++) {
                apiaries.push(res.rows.item(i));
            }
            return apiaries;
        } catch (error) {
            console.error('Unable to get apiaries', error);
        }
    }
}