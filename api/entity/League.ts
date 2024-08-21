import {Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne} from "typeorm"
import {User} from "./User";

@Entity()
export class League {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    description: string

    @Column()
    creationDate: number

    @Column()
    category: number

    @ManyToOne(() => User, user => user.id)
    author: User
}
