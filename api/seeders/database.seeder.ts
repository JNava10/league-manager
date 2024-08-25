import {UserSeeder} from "./user.seeder";
import {Seeder} from "../utils/abstract/seeder";

export const seeders: Seeder[] = [
    new UserSeeder(),
]