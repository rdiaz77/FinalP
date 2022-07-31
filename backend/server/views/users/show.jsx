const React = require('react')
const Def = require('../layouts/default')


function show (data){

    return(

        <Def>
            <main>
                <h1>this is the user show page</h1>
                {data.user.userName}
            </main>
        </Def>
    )
}

module.exports = show