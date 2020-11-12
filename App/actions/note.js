import { NOTE_CHANGE } from '../constants/index';

export function changeNotes(notes) {
    return {
        type: NOTE_CHANGE,
        payload: notes
    }
}