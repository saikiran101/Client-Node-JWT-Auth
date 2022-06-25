const express = require('express')
const dotenv = require('dotenv').config()
const {errorHandler}= require('./middleware/errorMiddleware')
const port = process.env.PORT || 8080

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use("/form/save-details", require('./routes/detailsRouter'))

app.use(errorHandler)

app.listen(port, ()=> console.log(`Server started on port ${port}`))