import {userSeedList} from "../items/user.list";
import {Seeder} from "../utils/abstract/seeder";
import {hashPassword} from "../utils/common.utils";
import {prisma} from "../app";

export class UserSeeder implements Seeder {
    run = async () => {
       try {
           const users = {...userSeedList};

           for (let i in users) {
               users[i].password = await hashPassword(process.env['DEFAULT_PASSWORD_TEXT']);

               // @ts-ignore
               await prisma.user.create({data: users[i]})
           }

       } catch (e) {
           console.error(e)
       } finally {
           await prisma.$disconnect()
       }
    };
}