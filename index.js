const express = require('express')

require('dotenv').config()


const cors = require('cors')
const cookieParser = require('cookie-parser')
{ StatusCodes } = require("http-status-codes")

const PORT = process.env.PORT

const app = express()
app.use(express.urlencoded({extended:true}))
app.use(express.json)

app.use(cors())
app.use(cookieParser())

//api route
app.use('/api/auth',require('./route/authRoute'))

//default route
app.all(`/**`,async(req,res)=>{
    return res.status(StatusCodes.NOT_FOUND).json({msg:`requested path not found`})
})

//default port

app.listen(PORT,()=>{
    console.log(`server is started ,and running @http://localhost:${PORT}`)
})