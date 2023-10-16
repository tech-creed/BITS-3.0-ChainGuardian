require('dotenv').config()
const express = require('express')
const cors = require('cors')
const path = require('path')

const app = express()

// global middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
    console.log("server listening on port " + PORT)
})

// routes for api handling
app.use("/",(req,res)=>{
    res.send('landing page')
})