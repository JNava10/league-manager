import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, BeforeInsert} from "typeorm"
import {hashPassword} from "../utils/common.utils";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nickname: string

    @Column()
    name: string

    @Column()
    lastname: string

    @Column()
    secondLastname: string

    @Column()
    password: string

    @CreateDateColumn()
    joinedAt: Date

    @BeforeInsert() hashPassword = async () => {
        console.log(this.password)

        if (this.password) return;

        this.password = await hashPassword(process.env['DEFAULT_PASSWORD_TEXT']);
    };
}
