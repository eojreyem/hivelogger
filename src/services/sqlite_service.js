import { SQLite} from '@ionic-native/sqlite';

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

    async addHive(in_apiary_id, number) {
        try {
            const res = await this.dbInstance.executeSql('INSERT INTO hives (in_apiary_id, number) VALUES (?, ?)', [in_apiary_id, number]);
            return res;
        } catch (error) {
            console.error('Unable to add hive', error);
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
