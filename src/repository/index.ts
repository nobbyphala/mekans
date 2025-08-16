import {createNote} from "./notes";
import {NoteRepo} from "../ports/repository";

export function getNotesRepo(): NoteRepo {
    return {
        createNote: createNote,
    }
}