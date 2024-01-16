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

        if (!category) {
            return "category not found";
        }

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
            throw new Error("Category not found");
        }

        await category.destroy();

        return category;
    } catch (error) {
        throw new Error("Could not find that category " + error.message);
    }
};

module.exports = {
    getCategories,
    postCategory,
    deleteCategoryById,
    getCategoryByName
}