import {Note} from "../entity";

export interface NoteRepo {
    createNote(note: Note): Promise<Note>;
}