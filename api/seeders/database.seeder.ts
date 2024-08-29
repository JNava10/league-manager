import {UserSeeder} from "./user.seeder";
import {Seeder} from "../utils/abstract/seeder";
import {TrackSeeder} from "./track.seeder";
import {ScoreSeeder} from "./score.seeder";

export const seeders: Seeder[] = [
    new UserSeeder(),
    new TrackSeeder(),
    new ScoreSeeder(),
]