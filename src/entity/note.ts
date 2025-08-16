import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";

@Entity({ name: 'notes' })
export class Note {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column({type: "varchar", length: 255})
    title!: string;

    @Column({type: "text"})
    text!: string;

    @CreateDateColumn({type: "timestamptz"})
    createdAt!: Date;

    @UpdateDateColumn({type: "timestamptz"})
    updatedAt!: Date;
}