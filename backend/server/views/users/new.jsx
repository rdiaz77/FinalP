const React = require('react')
const Def = require('../layouts/default')


function new_User(){

    return(

        <Def>
            <h1>this page add new user </h1>


            <form action="/users" method='POST'>
                <div>
                    <label htmlFor="name">User Name</label>
                    <input type="text" name="userName" id="userContact" />
                </div>

                <div>
                    <label htmlFor="name">User Phone</label>
                    <input type="text" name="userPhone" id="userPhone" />
                </div>

                <div>
                    <input type="submit" value="Add Contact" />
                </div>
                    

            </form>
        </Def>
    )
}

module.exports = new_User