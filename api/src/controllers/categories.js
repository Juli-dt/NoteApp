const {  Category } = require("../db");

const getCategories = async () => {
    try {
        const categories = await Category.findAll();
        return categories
    } catch (error) {
        console.log(error);
        return error
    }
}
const postCategory = async (name) => {
    try {
        const newCategory = await Category.create({ name });
        return newCategory;
    } catch (error) {
        console.log(error);
        return error
    }
};

const getCategoryByName = async (id) => {
    try {
        const category = await Category.findByPk(id);

        // Verificar si se encontró la categoría
        if (!category) {
            return "categoría no encontrada";
        }

        // Enviar la categoría como respuesta
        return category;
    } catch (error) {
        console.error(error);
        return error;
    }
};

const deleteCategoryById = async (id) => {
    try {
        const category = await Category.findByPk(id);

        if (!category) {
            throw new Error("Categoría no encontrada");
        }

        await category.destroy();

        return category;
    } catch (error) {
        throw new Error("Error al eliminar la categoría por ID: " + error.message);
    }
};

module.exports = {
    getCategories,
    postCategory,
    deleteCategoryById,
    getCategoryByName
}