const express = require("express")
const { accGraph } = require("../controllers/graphController")

const router = express.Router()

router.get("/graphAddr/:chain/:address", accGraph)

module.exports = router