const React = require('react')
const Def = require('../layouts/default')


function new_User(){

    return(

        <Def>
            <h1>this page add new user </h1>


            <form action="/users" method='POST'>
                <div>
                    <label htmlFor="name">User's Name</label>
                    <input type="text" name="userName" id="userContact" required/>
                </div>
                
                <div>
                    <label htmlFor="name">User's Last Name</label>
                    <input type="text" name="userLastName" id="userLastContact" required/>
                </div>

                <div>
                    <label htmlFor="name">User's Phone</label>
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