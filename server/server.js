require('dotenv').config()
const express = require('express')
const cors = require('cors')
const path = require('path')

const app = express()

// global middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(express.static(path.join(__dirname, 'build')))

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

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
})