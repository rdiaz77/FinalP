const React = require('react')
const Def = require('../layouts/default')


function new_Contact(){

    return(

        <Def>
            <h1>this page add new contact </h1>


            <form action="/contacts" method='POST'>
                <div>
                    <label htmlFor="name">Contact's Name</label>
                    <input type="text" name="contactName" id="contactName" required />
                </div>

                <div>
                    <label htmlFor="name">Contact's Last Name</label>
                    <input type="text" name="contactLastName" id="contactLastName" required/>
                </div>

                <div>
                    <label htmlFor="name">Phone Number</label>
                    <input type="text" name="contactPhone" id="contactPhone" />
                </div>

                <div>
                    <input type="submit" value="Add Contact" />
                </div>
                    

            </form>
        </Def>
    )
}

module.exports = new_Contact