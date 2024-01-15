const { Note } = require("../db");

const createNote = async (noteData) => {
    try {

        if(!noteData.title) {
            return false
        }

        const createdNote = await Note.create({
            title: noteData.title,
            content: noteData.content,
            categoryId: noteData.categoryId
        })

        return createdNote;

    } catch (error) {
        console.log(error);
        return error.message
    }
}

const getByCategory = async (id) => {
    try {
        const notes = await Note.findAll({
            where: {
                categoryId: id
            }
        })

        return notes

    } catch (error) {
        console.log(error);
        return error.message
    }
}

const getNotes = async () => {
    try {
        const notes = await Note.findAll()
        if (notes.length > 0) {
            return notes;
        } else {
            return null; // Devuelve null cuando no hay notas
        }
    } catch (error) {
        console.log(error);
        throw error; // Lanza el error para que pueda ser manejado por el código que llama a la función
    }
}


const getActives = async() => {
    try {
        const actives = await Note.findAll({
            where: {
                status: 'active'
            }
        });
        if (actives.length > 0) {
            return actives;
        } else {
            return null; 
        }
    } catch (error) {
        console.log(error);
        return error.message
    }
}

const getNoteByID = async(id) => {
    try {
        const note = await Note.findByPk(id)

        return note 
    } catch (error) {
        console.log(error);
        return error.message
    }
}
const getArchived = async() => {
    try {
        const archived = await Note.findAll({
            where: {
                status: 'archived'
            }
        })

        if (archived.length > 0) {
            return actives;
        } else {
            return null; 
        }    } catch (error) {
        console.log(error);
        return error.message
    }
    
}

const deleter = async (noteId) => {
    try {
        
        const deletedNote = await Note.destroy({
            where: {
                id: noteId
            }
        })

        deletedNote ? deletedNote : false

    } catch (error) {
        console.log(error);
        return error.message
    }
}

const updater = async (noteId, updatedData) => {
    try {
        const updatedRows = await Note.update(updatedData, {
            where: {
                id: noteId
            }
        });

        return updatedRows;
    } catch (error) {
        console.log(error);
        return error.message;
    }
};




const toggleNoteStatus = async (id) => {
    try {
       const elemento = await Note.findByPk(id);
   
       if (!elemento) {
         return { error: 'Elemento no encontrado' };
       }
   
       await elemento.update({
         status: elemento.status === 'active' ? 'archived' : 'active',
       });
   
       return { message: 'Estado actualizado correctamente' };
    } catch (error) {
        console.log(error, error.message);
       return { error: 'Error al actualizar el estado' };
    }
   }

module.exports = {
    deleter,
    getActives,
   getArchived,
   getNotes,
   toggleNoteStatus,
   updater,
   createNote,
   getByCategory,
   getNoteByID 
}