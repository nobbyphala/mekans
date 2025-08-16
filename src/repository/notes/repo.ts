import {AppDataSource} from "../../data-source";
import {Note} from "../../entity";

export const notesRepo = () => AppDataSource.getRepository(Note);