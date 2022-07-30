require('dotenv').config()
const express = require("express")
const app = express()
const PORT = process.env.PORT


// link the ./controllers/places file with the main index file

app.use('places',require('./controllers/places'))

// MIDDLEWARE -- allows the use of JSX for server-side rendering (SSR) in Express 

app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())


// Homepage route

app.get('/', (req,res)=>{
    res.send('this is my home page')
})

// Login route

app.get('/login', (req,res)=>{
    res.send('this is my login page')
})



// wild operator route

app.get('*', (req,res)=>{
    res.status(404).send("<h1>404 Page</h1>")
    
    
})

app.listen(PORT, () => console.log('awaken from express index js at port', PORT))
