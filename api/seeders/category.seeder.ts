import {userSeedList} from "../items/user.list";
import {Seeder} from "../utils/abstract/seeder";
import {hashPassword} from "../helpers/common.helper";
import {prisma} from "../app";
import {categorySeed} from "../items/category.list";

export class CategorySeeder implements Seeder {
    run = async () => {
       try {
           const seedList = {...categorySeed}

           for (let i in seedList) {
               const createdCategory = await prisma.category.create({
                   data: {
                       name: seedList[i].name,
                       description: seedList[i].description
                   }
               })

               const subcategories = seedList[i].subcategories

               for (let j in subcategories) {
                   await prisma.subcategory.create({
                       data: {
                           name: subcategories[j].name,
                           description: subcategories[j].description,
                           parentId: createdCategory.id
                       }
                   })
               }
           }

       } catch (e) {
           console.error(e)
       } finally {
           await prisma.$disconnect()
       }
    };
}