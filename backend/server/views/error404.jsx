const React = require('react')
const Def = require('./layouts/default')


function error404(){
    return(

        <Def>
            <main>
                <h1>404: Page not found - index.js view</h1>
                <img src='/images/404Error_Dog.jpg' alt='dog reading a tablet -  page not found'/>

            </main>
        </Def>


    )
}


module.exports = error404
