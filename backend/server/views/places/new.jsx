const React =  require('react')
const Def = require('../layouts/default')


function new_Place () {
    return(
        <Def>
            <main>
                <h1> This is the form to add a new client</h1>
                <form action="/places" method='POST'>
                    <div>
                        <label htmlFor="name">Name Place</label>
                        <input type="text" name="name" id="name" required/>
                    </div>

                    <div>
                        <label htmlFor="name">Address</label>
                        <input type="text" name="address" id="address" />
                    </div>

                    <div>
                        <label htmlFor="name">County</label>
                        <input type="text" name="county" id="county" required/>
                    </div>

                    <div>
                        <label htmlFor="name">City</label>
                        <input type="text" name="city" id="city" required/>
                    </div>

                    <div>
                        <label htmlFor="name">Region</label>
                        <input type="text" name="region" id="region" required/>
                    </div>

                    <div>
                        <label htmlFor="name">Contact Name</label>
                        <input type="text" name="contact_name" id="contact_name" />
                    </div>

                    <div>
                        <label htmlFor="name">Phone Number</label>
                        <input type="text" name="contact_phone_number" id="contact_phone_number" />
                    </div>
                    
                    <div>
                        <input type="submit" value="Add Place" />
                    </div>

                </form>
            </main>
        </Def>
    )
}


module.exports = new_Place