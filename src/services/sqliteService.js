import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

export class SqliteService {
    constructor() {
        this.dbInstance = null;
    }

    async initDB() {
        try {
            console.log('created database!');
            this.dbInstance = await SQLite.create({
                name: 'hivelogger.db',
                location: 'default'
            });
            // await this.deleteAllTables();
            await this.createTables();
        } catch (error) {
            console.error('Unable to open database', error);
        }
    }

    async createTables() {
        try {
            await this.dbInstance.executeSql(`
        CREATE TABLE IF NOT EXISTS apiaries (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          name TEXT
        );
      `, []);
        } catch (error) {
            console.error('Unable to create tables', error);
        }
    }

    async deleteAllTables() {
        try {
            // Get all table names
            const res = await this.dbInstance.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name NOT LIKE 'sqlite_%'", []);
            
            // Drop each table
            for (let i = 0; i < res.rows.length; i++) {
                const tableName = res.rows.item(i).name;
                await this.dbInstance.executeSql(`DROP TABLE IF EXISTS ${tableName}`, []);
            }
            
            console.log('All tables deleted successfully');
        } catch (error) {
            console.error('Unable to delete tables', error);
        }
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
