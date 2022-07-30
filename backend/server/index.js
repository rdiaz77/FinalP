require('dotenv').config()
const express = require("express")
const app = express()




// Homepage route

app.get('/', (res,req)=>{
    console.log('this is my home page')
})

// Login route

app.get('/login', (res,req)=>{
    console.log('this is my login page')
})



// wild operator route

app.get('*', (res,req)=>{
    res.statusCode(404).send("<h1>404 Page</h1>")
    
    
})

app.listen(process.env.PORT, () => console.log('awaken from express index js'))
