const express = require("express")
const NEWSController = require("../controllers/newsController")

const router = express.Router()

// NEWS API routes
router.get("/headlines", NEWSController.Headlines)
router.get("/category/:query", NEWSController.CategoryHeadlines)
router.get("/search/:query", NEWSController.Search)

module.exports = router