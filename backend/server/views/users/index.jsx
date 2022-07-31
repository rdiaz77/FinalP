const React = require("react")
const Def = require('../layouts/default')


function index(data){

    let selectedUsers = data.users.map((user)=>{
        const {userName, userLastName, userPhone} = user
        

        return(
            <div>
        
                <h2>{userName} {userLastName}. Phone: {userPhone} </h2>
                
                
        
            </div>
            
        )
    })


    return(

        <Def>
            <h1>this is the index page of the contacts folder</h1>
            <h2>{selectedUsers}</h2>
        </Def>
    )
   
}

module.exports = index