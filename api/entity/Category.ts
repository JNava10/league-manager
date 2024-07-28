import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class League {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    description: string
}
