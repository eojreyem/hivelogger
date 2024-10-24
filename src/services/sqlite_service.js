import { SQLite } from '@ionic-native/sqlite';
import { ApiaryService } from './apiary_service';
import { HiveService } from './hive_service';

export class SqliteService {
    constructor() {
        this.dbInstance = null;
        this.apiaryService = null;
        this.hiveService = null;
    }

    async initDB() {
        try {
            console.log('created database!');
            this.dbInstance = await SQLite.create({
                name: 'hivelogger.db',
                location: 'default'
            });
            await this.createTables();
            this.apiaryService = new ApiaryService(this.dbInstance);
            this.hiveService = new HiveService(this.dbInstance);
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

            await this.dbInstance.executeSql(`
                CREATE TABLE IF NOT EXISTS hives (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    in_apiary_id INTEGER,
                    number INTEGER          
                );
            `, []);

            console.log('Tables created successfully');
        } catch (error) {
            console.error('Unable to create tables', error);
        }
    }

    async deleteAllTables() {
        try {
            const res = await this.dbInstance.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name NOT LIKE 'sqlite_%'", []);
            for (let i = 0; i < res.rows.length; i++) {
                const tableName = res.rows.item(i).name;
                await this.dbInstance.executeSql(`DROP TABLE IF EXISTS ${tableName}`, []);
            }
            console.log('All tables deleted successfully');
        } catch (error) {
            console.error('Unable to delete tables', error);
        }
    }
}
