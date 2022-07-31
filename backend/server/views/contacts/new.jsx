const React = require('react')
const Def = require('../layouts/default')


function new_Contact(){

    return(

        <Def>
            <h1>this page add new contact </h1>


            <form action="/contacts" method='POST'>
                <div>
                    <label htmlFor="name">Contact Name</label>
                    <input type="text" name="contact_name" id="contact_name" />
                </div>

                <div>
                    <label htmlFor="name">Phone Number</label>
                    <input type="text" name="contact_phone_number" id="contact_phone_number" />
                </div>

                <div>
                    <input type="submit" value="Add Contact" />
                </div>
                    

            </form>
        </Def>
    )
}

module.exports = new_Contact