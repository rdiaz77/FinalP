const React = require("react")
const Def = require("../layouts/default")


function show(data){
    return(
        <Def>
            <h1>this page shows the individual place</h1>

            {data.place.name}
        </Def>
    )
}