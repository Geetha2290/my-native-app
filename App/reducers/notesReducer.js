import { NOTES_CHANGE } from '../constants/index';

const initialState = {
                        notes: []
                    };
const notesReducer = (state = initialState, action) => {
    switch(action.type) {
        case NOTES_CHANGE:
            return {
            ...state,
            notes:action.payload
            };
        default:
    return state;
    }
}
export default notesReducer;