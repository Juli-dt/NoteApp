const { deleteCategoryById,
    getCategories,
    getCategoryByName,
    postCategory
} = require("../controllers/categories")

const getAllCategories = async (req, res) => {
    try {
        const categories = await getCategories()
        if (categories.length === 0) {
            return res.status(404).send("No se encontraron categorías")
        }
        return res.status(200).json(categories)
    } catch (error) {
        console.log(error);
        return res.status(500).send(error.message)
    }
}

const addCategory = async (req, res) => {
    const { name } = req.body
    if (!name) {
        return res.status(500).send("No está llegando el name")

    }
    try {
        const newCategory = await postCategory(name)
        res.status(201).json(newCategory)
    } catch (error) {
        console.log(error);
        return res.status(500).send(error.message)
    }
}


const deleter = async (req, res) => {
    const id = req.params.id
    try {
        const deletedCat = await deleteCategoryById(id)
        if (!deletedCat) {
            return res.status(404).send("No se encontró la categoría")
        }
        return res.status(200).json(deletedCat)
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message)
    }

}

const getCatByName = async (req, res) => {
    const { id } = req.params;

    try {
        const category = await getCategoryByName(id);

        // Verificar si se encontró la categoría
        if (!category) {
            return res.status(404).json({ message: "aaaa" });
        }

        // Enviar la categoría como respuesta
        return res.status(200).json(category);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error en el servidor" });
    }
};


module.exports = {
    getAllCategories,
    deleter,
    getCatByName,
    addCategory
}