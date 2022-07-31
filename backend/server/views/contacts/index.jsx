const React = require("react")
const Def = require('../layouts/default')


function index(data){

    let selectedContacts = data.contacts.map((contact)=>{
        const {contactName, contactLastName, contactPhone} = contact
        

        return(
            <div>
        
                <h2>{contactName} {contactLastName}. Phone: {contactPhone} </h2>
                
                
        
            </div>
            
        )
    })


    return(

        <Def>
            <h1>this is the index page of the contacts folder</h1>
            <h2>{selectedContacts}</h2>
        </Def>
    )
   
}

module.exports = index