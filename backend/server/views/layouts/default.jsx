const React = require('react')


function Def (html){
    return(

        <html>

            <head>
                <title>SVTrace</title>
                {/* CSS link */}
                <link rel="stylesheet" href="/css/style.css" /> 
            </head>

            <body>
                {html.children}
            </body>
        </html>
    )


}


module.exports = Def