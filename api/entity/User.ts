import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, BeforeInsert, OneToMany, ManyToOne} from "typeorm"
import {League} from "./League";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nickname: string

    @Column()
    email: string

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

    @OneToMany(() => League, (league) => league.author)
    leagues: League[]
}
