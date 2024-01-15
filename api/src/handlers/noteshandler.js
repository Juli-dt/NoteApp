const { deleter,
    getActives,
   getArchived,
   getNotes,
   toggleNoteStatus,
   updater,
   createNote,
   getByCategory,
   getNoteByID
 } = require("../controllers/notes")



 const getAllNotes = async (req, res) => {
    try {
        const notes = await getNotes()

        if (notes !== null) {
            return res.status(200).json(notes);
        } else {
            return res.status(404).send("Nothing here");
        }
    } catch (error) {
        console.log(error);
        return res.status(500).send(error.message);
    }
}
const getById = async (req, res) => {
    try {
        const id = req.params.id
        const note = await getNoteByID(id)
        return res.status(200).json(note)
    } catch (error) {
        console.log(error);
        return res.status(500).send(error.message);
    }
}
const notesByCategory = async (req, res) => {
    try {
        const id = req.params.id

        const notes = await  getByCategory(id)

        notes ? res.status(200).json(notes) : res.status(404).send("nothind here")
    } catch (error) {
        console.log(error);
            return res.status(500).send(error.message)
    }
}

   const getActiveNotes = async (req, res) => {
        try {
            
            const actives = await getActives()

            if (actives !== null) {
                return res.status(200).json(actives);
            } else {
                return res.status(404).send("Nothing here");
            }
        } catch (error) {
            console.log(error);
            return res.status(500).send(error.message)
        }
   }

   const getArchivedNotes = async (req, res) => {
        try {
            
            const archived = await getArchived()

            if (archived !== null) {
                return res.status(200).json(archived);
            } else {
                return res.status(404).send("Nothing here");
            }
        } catch (error) {
            console.log(error);
            return res.status(500).send(error.message)
        }

   }


   const toggler = async (req, res) => {
    const id = req.params.id;
   
    const response = await toggleNoteStatus(id);
   
    if (response.error) {
       return res.status(400).json({ error: response.error });
    }
   
    return res.status(200).json({ message: response.message });
   };


    const deleteNote = async(req, res) => {
        try {
             
            const noteId = req.params.id

            const letsdelete = await deleter(noteId)

            if( letsdelete === false){
                return res.status(404).send(letsdelete)
            } else{
                return res.status(200).send("The note ceased to exist")
            }
        } catch (error) {
            console.log(error);
            return res.status(500).send(error.message)
        }
    }

    const updateNote = async (req, res) => {
        try {
            const noteId = req.params.id;
            console.log(noteId);
    
            if (!noteId) {
                return res.status(400).send("A title is required");
            }
    
            const updateData = req.body;
    
            if (!updateData || Object.keys(updateData).length === 0) {
                return res.status(400).send("Valid data required for the update");
            }
    
            const updatedRows = await updater(noteId, updateData);
    
            if (updatedRows > 0) {
                return res.status(200).send("The note was updated");
            } else {
                return res.status(404).send("There's no note with that ID");
            }
        } catch (error) {
            console.log(error);
            return res.status(500).send(error.message);
        }
    };
    
    
        const creator = async (req, res) => {
            try {
                const data = req.body

                const create = await createNote(data)
                console.log(create);
                if( create === false ){
                    res.status(400).send("A title is required")
                } else {
                    res.status(200).send("Note created")
                }
            } catch (error) {
                console.log(error);
                return res.status(500).send(error.message)
            }
        }

        module.exports = {
            updateNote,
            deleteNote,
            toggler,
            getArchivedNotes,
            getActiveNotes,
            creator,
            getAllNotes,
            notesByCategory,
            getById 
        }