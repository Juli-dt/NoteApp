const { Router } = require("express");


const notes = require("./notes");
const categories = require ("./categories")
const router = Router();




router.use("/notes", notes);
router.use("/categories", categories)
module.exports = router;