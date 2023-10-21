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

// routes
const apiRoute = require('./routes/apiRoute')
const newsRoute = require('./routes/newsRoutes')
const graphRoute = require('./routes/graphRoutes')



app.listen(PORT, () => {
    console.log("server listening on port " + PORT)
})

app.use("/api", apiRoute)
app.use("/news", newsRoute)
app.use("/graph", graphRoute)


// routes for api handling
app.use("/",(req,res)=>{
    res.send('Welcome to the API Service for ChainGuardian')
})