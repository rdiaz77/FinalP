const React = require('react')


function Def (html){
    return(

        <html>

            <head>
                <h1>SVTrace</h1>
            </head>

            <body>
                {html.children}
            </body>
        </html>
    )


}


module.exports = Def