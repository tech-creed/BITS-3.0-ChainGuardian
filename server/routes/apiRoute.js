const express = require("express")
const { tnxDetails,accDetails,accValidator } = require("../controllers/apiController")

const router = express.Router()

router.get("/addressValidator/:address",accValidator)

module.exports = router