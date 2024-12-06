import { Entity,Column,PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id:number

    @Column({length:500})
    name:string

    @Column({nullable:false})
    email:string

    @Column()
    token:string

    @Column({type:'text'})
    role:string

    @Column({type:'int'})
    mobile:number
}