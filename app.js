const express = require('express')
const app = express()
const path = require('path')

app.use(express.static(path.resolve(__dirname,'./public')))

app.listen(3005,()=>console.log('puerto 3005 abierto'))

app.get('/register',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/register.html'))
})