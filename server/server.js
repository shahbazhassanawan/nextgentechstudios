const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const path = require("path");
const formRoutes = require('./routes/formRoutes')


dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

//middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

//files serve
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

//routes
app.use('/api/form',formRoutes)

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})