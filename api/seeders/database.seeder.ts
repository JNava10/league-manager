import {UserSeeder} from "./user.seeder";
import {Seeder} from "../utils/abstract/seeder";
import {TrackSeeder} from "./track.seeder";

export const seeders: Seeder[] = [
    new UserSeeder(),
    new TrackSeeder(),
]