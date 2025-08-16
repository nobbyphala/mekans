import {Note} from "../../entity";
import {notesRepo} from "./repo";

export async function createNote(note: Note): Promise<Note> {
    const repo = notesRepo();
    const note = repo.create(note);
    const savedNotes = await repo.save(note);

    return savedNotes[0];
}