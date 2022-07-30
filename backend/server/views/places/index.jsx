const React = require('react')
const Def = require('../layouts/default')


function index (data){

    let selectedPlace = data.places.map((place)=> {
        const {address, county, city, region} = place
        

        return(
            <div>
        
                <h2>{place.name}</h2>
                <h3>{address}, {county}, {city}, {region} </h3>
                
        
            </div>
            
        )
    })
        return(
            <Def>

                <main>
                <h2>Index jsx for the places folder</h2>
                {selectedPlace}


                </main>
            </Def>
        )

}

module.exports = index