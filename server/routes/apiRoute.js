const express = require("express")
const { tnxDetails,accDetails,accValidator } = require("../controllers/apiController")

const router = express.Router()

router.get("/transData/:chain/:txn_id",tnxDetails)
router.get("/addressData/:chain/:address",accDetails)

router.get("/addressValidator/:address",accValidator)

module.exports = router