require('dotenv').config()
const express = require("express")
const app = express()
const PORT = process.env.PORT


// MIDDLEWARE (express)-- allows the use of JSX for server-side rendering (SSR) in Express 
// link the ./controllers/places file with the main index file


app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.urlencoded({ extended: true }))
app.use('/places',require('./controllers/places'))
app.use(express.static("public"))
app.use('/contacts', require('./controllers/contacts'))
app.use('/users', require('./controllers/users'))

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
