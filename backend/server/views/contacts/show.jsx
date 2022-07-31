const React = require("react")
const Def = require("../layouts/default")


function show(data){

    return(

        <Def>
            <h1>this is the show page for individual contacts</h1>

            {data.contact.contactName}

        </Def>
    )
}

module.exports = show