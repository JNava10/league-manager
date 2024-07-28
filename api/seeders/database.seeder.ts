import {UserSeeder} from "./user.seeder";
import {Seeder} from "../abstract/seeder";

export const seeders: Seeder[] = [
    new UserSeeder(),
]