const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const app = express()
require('dotenv').config()

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//test
app.get('/', (req, res) => {
    res.send("API is ready !")
})

//Route Users
const user = require('./modules/users/user.router')
app.use('/api/users', user)

const PORT = process.env.PORT || 8080; 
app.listen(PORT, () => console.log(`Listen to port ${PORT}`))
