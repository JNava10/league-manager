import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import {League} from "./entity/League";
import {Category} from "./entity/Category";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "league_manager",
    synchronize: true,
    logging: false,
    entities: [User, League, Category],
    migrations: [],
    subscribers: [],
})
