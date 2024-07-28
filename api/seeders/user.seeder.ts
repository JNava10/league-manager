import {userSeedList} from "../items/user.list";
import {User} from "../entity/User";
import {AppDataSource} from "../data-source";
import {Seeder} from "../abstract/seeder";
import {hashPassword} from "../utils/common.utils";

export class UserSeeder implements Seeder {
    run = async () => {
        // Delete existing records
        await AppDataSource
            .createQueryBuilder()
            .delete()
            .from(User)
            .execute();

        const userList = [...userSeedList];

        // Adding hashed password in users
        for (const user of userList) {
            user.password = await hashPassword();
        }

        console.log(userList)

        // Bulk-inserting records
        await AppDataSource
            .createQueryBuilder()
            .insert()
            .into(User)
            .values(userList)
            .execute();
    };
}