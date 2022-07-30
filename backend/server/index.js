require('dotenv').config()
const express = require("express")
const app = express()
const PORT = process.env.PORT


// MIDDLEWARE -- allows the use of JSX for server-side rendering (SSR) in Express 


app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())


// link the ./controllers/places file with the main index file

app.use('/places',require('./controllers/places'))
app.use(express.static("public"))

// Homepage route

app.get('/', (req,res)=>{
    res.render("home")
})

// Login route

app.get('/login', (req,res)=>{
    res.send('this is my login page')
})



// wild operator route

app.get('*', (req,res)=>{
    res.render('error404')
    
    
})

app.listen(PORT, () => console.log('awaken from express index js at port', PORT))
