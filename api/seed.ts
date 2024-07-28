import {AppDataSource} from "./data-source";
import {seeders} from "./seeders/database.seeder";

import {config} from "dotenv";

config()

AppDataSource.initialize().then(async () => {
    for (const seeder of seeders) {
        await seeder.run()
    }

    process.exit()
}).catch(error => console.log(error))