// DEPENDENCIES
const methodOverride = require('method-override');
require('dotenv').config()
const express = require("express")
const app = express()
const PORT = process.env.PORT
const { Sequelize } = require('sequelize')



/// SEQUELIZE CONNECTION --- need to improve this part

// const sequelize = new Sequelize('SVTrace', 'postgres', "Asturias171#", {
//     host: 'localhost',
//     dialect: 'postgres'
//   });

// try {
//     sequelize.authenticate() 
//     console.log(`Connected with Sequelize at ${process.env.PG_URI}`) 
// } catch(err) {
//     console.log(`Unable to connect to PG: ${err}`) 
// }




// MIDDLEWARE (express)-- allows the use of JSX for server-side rendering (SSR) in Express 

// link the ./controllers/places file with the main index file

app.use(methodOverride("_method"))
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.urlencoded({ extended: true }))
app.use(express.static("public"))



// VIEW routes
const regionsController = require('./controllers/region_controller')
const usersController = require('./controllers/user_controller')
const visitsController = require('./controllers/visit_controller')

app.use('/users', usersController)
app.use('/places', require('./controllers/place_controller'))
app.use('/regions', regionsController)

// app.use('/visits', visitsController)

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

//LISTEN port

app.listen(PORT, () => console.log('awaken from express index js at port', PORT))


