const { Router } = require("express");
const {addCategory,
        deleter,
        getAllCategories,
        getCatByName,
    } = require("../handlers/categorieshandler")

const categoryRouter = Router()

categoryRouter.get("/", getAllCategories)

categoryRouter.get("/:id", getCatByName)

categoryRouter.post("/", addCategory)

categoryRouter.delete("/:id", deleter)

module.exports = categoryRouter