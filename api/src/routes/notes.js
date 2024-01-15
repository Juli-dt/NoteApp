const { Router } = require("express");
const {
    creator,
    deleteNote,
    getActiveNotes,
    getArchivedNotes,
    toggler,
    updateNote,
    getAllNotes,
    notesByCategory,
    getById 
} = require("../handlers/noteshandler")

const notesRoutes = Router();

notesRoutes.get("/", getAllNotes);

notesRoutes.get("/actives", getActiveNotes);

notesRoutes.get("/archived", getArchivedNotes);

notesRoutes.post("/", creator);

notesRoutes.delete("/:id", deleteNote);

notesRoutes.put("/:id", updateNote);

notesRoutes.put("/toggle/:id", toggler)

notesRoutes.get("/category/:id", notesByCategory)

notesRoutes.get("/:id", getById)
module.exports = notesRoutes;