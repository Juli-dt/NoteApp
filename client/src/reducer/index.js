const initialState = {
    allNotes: [],
    actives: [],
    archived: [],
    categories: [],
    note: []
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case "GET_NOTES":
            return {
                ...state,
                allNotes: action.payload
            };
        case "GET_BY_ID":
            return {
                ...state,
                note: action.payload
            };
        case "POST_NOTE":
            const newNote = action.payload;

            const updateAllNotes = [...state.allNotes, newNote];

            let updateActives, updateArchived;
            if (newNote.status === "active") {
                updateActives = [...state.actives, newNote];
                updateArchived = state.archived
            } else {
                updateArchived = [...state.archived, newNote];
                updateActives = state.actives
            }

            return {
                ...state,
                allNotes: [...updateAllNotes, newNote],
                actives: updateActives,
                archived: updateArchived
            }
        case "GET_ACTIVES":
            return {
                ...state,
                actives: action.payload,
            };

        case "GET_ARCHIVED":
            return {
                ...state,
                archived: action.payload,
            };
        case "DELETE_NOTE":
            const deletedNoteId = action.payload.id;

            const updatedAllNotes = state.allNotes.filter((note) => note.id !== deletedNoteId);

            const updatedActives = state.actives.filter((note) => note.id !== deletedNoteId);

            const updatedArchived = state.archived.filter((note) => note.id !== deletedNoteId);

            return {
                ...state,
                allNotes: updatedAllNotes,
                actives: updatedActives,
                archived: updatedArchived,
            };
        case "EDIT_NOTE":
            const editedNote = action.payload;

            const updateNotesByStatus = (notesArray) =>
                notesArray.map((note) => (note.id === editedNote.id ? editedNote : note));

            const updatedAll = updateNotesByStatus(state.allNotes);

            const updatedActivesNotes = editedNote.status === 'active'
                ? updateNotesByStatus(state.actives)
                : state.actives;

            const updatedArchivedNotes = editedNote.status === 'archived'
                ? updateNotesByStatus(state.archived)
                : state.archived;

            return {
                ...state,
                allNotes: updatedAll,
                actives: updatedActivesNotes,
                archived: updatedArchivedNotes,
            };

        case "TOGGLE_STATUS":
            const toggledNote = action.payload;

            const updateNotesByStatusToggle = (notesArray) =>
                notesArray.map((note) =>
                    note.id === toggledNote.id ? { ...note, status: toggledNote.status } : note
                );

            const updatedAllToggle = updateNotesByStatusToggle(state.allNotes);

            const updatedActivesToggle =
                toggledNote.status === "active"
                    ? [...state.actives, toggledNote]
                    : state.actives.filter((note) => note.id !== toggledNote.id);

            const updatedArchivedToggle =
                toggledNote.status === "archived"
                    ? [...state.archived, toggledNote]
                    : state.archived.filter((note) => note.id !== toggledNote.id);

            return {
                ...state,
                allNotes: updatedAllToggle,
                actives: updatedActivesToggle,
                archived: updatedArchivedToggle,
            };
        case "GET_CATEGORIES":
            return {
                ...state,
                categories: action.payload,
            };
        case "POST_CATEGORY":
            return {
                ...state,
                categories: [...state.categories, action.payload],
            };
        case "NOTE_BY_CATEGORY":
            return {
                ...state,
                notesByCategory: action.payload,
            };

            default:
                return state;


    }
};

export default rootReducer