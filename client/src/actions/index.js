import axios from "axios"

const endpointNotes = "http://localhost:3001/notes"
const endpointCategories= "http://localhost:3001/categories"


//NOTES 

// ...

//NOTES 

//1
export function getNotes() {
    return async (dispatch) => {
        try {
            let json = await axios.get(endpointNotes);
            dispatch({
                type: "GET_NOTES",
                payload: json.data,
            });
        } catch (error) {
            console.error("Error getting notes:", error.message);
        }
    };
}

//2
export function postNote(noteData) {
    return async (dispatch) => {
        try {
            const json = await axios.post(endpointNotes, noteData);
            dispatch({
                type: "POST_NOTE",
                payload: json.data,
            });
        } catch (error) {
            console.error("Error creating note:", error.message);
        }
    };
}

//3
export function getActives() {
    return async (dispatch) => {
        try {
            let json = await axios.get(`${endpointNotes}/actives`);
            dispatch({
                type: "GET_ACTIVES",
                payload: json.data,
            });
        } catch (error) {
            console.error("Error getting active notes:", error.message);
        }
    };
}

//3.1
export function getArchived() {
    return async (dispatch) => {
        try {
            let json = await axios.get(`${endpointNotes}/archived`);
            dispatch({
                type: "GET_ARCHIVED",
                payload: json.data,
            });
        } catch (error) {
            console.error("Error getting archived notes:", error.message);
        }
    };
}

//4
export function deleteNote(id) {
    return async (dispatch) => {
        try {
            let json = await axios.delete(`${endpointNotes}/${id}`);
            dispatch({
                type: "DELETE_NOTES",
                payload: json.data,
            });
        } catch (error) {
            console.error("Error deleting note:", error.message);
        }
    };
}

//5
export function editNotes(id, data) {
    return async (dispatch) => {
        try {
            let json = await axios.put(`${endpointNotes}/${id}`, data);
            dispatch({
                type: "EDIT_NOTES",
                payload: json.data,
            });
        } catch (error) {
            console.error("Error editing note:", error.message);
        }
    };
}

//TOGGLE
export function toggleStatus(id) {
    return async (dispatch) => {
        try {
            let json = await axios.put(`${endpointNotes}/toggle/${id}`);
            dispatch({
                type: "TOGGLE_STATUS",
                payload: json.data,
            });
        } catch (error) {
            console.error("Error toggling note status:", error.message);
        }
    };
}

//FILTER
export function filterNotes(payload) {
    return {
        type: "FILTER_CREATED",
        payload,
    };
}

export function getbyId (id){
    return async (dispatch) => {
        try {
            let json = await axios.get(`${endpointNotes}/${id}`)
            dispatch({
                type: "GET_BY_ID",
                payload: json.data
            })
        } catch (error) {
            console.error("Error getting categories:", error.message);
        }
    }
}
//CAtEGORIES

// ...

//CATEGORIES

//1
export function getCategories() {
    return async (dispatch) => {
        try {
            let json = await axios.get(endpointCategories);
            dispatch({
                type: "GET_CATEGORIES",
                payload: json.data,
            });
        } catch (error) {
            console.error("Error getting categories:", error.message);
        }
    };
}

//2
export function postCategory(categoryData) {
    return async (dispatch) => {
        try {
            const json = await axios.post(endpointCategories, categoryData);
            dispatch({
                type: "POST_CATEGORY",
                payload: json.data,
            });
        } catch (error) {
            console.error("Error creating category:", error.message);
        }
    };
}

//3
export function notesByCategory(category) {
    return async (dispatch) => {
        try {
            const json = await axios.get(`${endpointNotes}/category/${category}`);
            dispatch({
                type: "NOTE_BY_CATEGORY",
                payload: json.data,
            });
        } catch (error) {
            console.error("Error getting notes by category:", error.message);
        }
    };
}

export function filterNotesByCategory(category) {
    return {
      type: "FILTER_NOTES_BY_CATEGORY",
      payload: category,
    };
  }