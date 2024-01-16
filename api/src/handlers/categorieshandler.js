const { deleteCategoryById,
    getCategories,
    getCategoryByName,
    postCategory
} = require("../controllers/categories")

const getAllCategories = async (req, res) => {
    try {
        const categories = await getCategories()
        if (categories.length === 0) {
            return res.status(404).send("nothing here")
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
        return res.status(500).send("Name is mandatory")

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
            return res.status(404).send("Category not found")
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
        if (!category) {
            return res.status(404).json({ message: "not categories here" });
        }
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