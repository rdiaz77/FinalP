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
                <nav>
                    <ul>
                        <li>
                            <a href="/">Dashboard</a>
                        </li>
                        <li>
                            <a href="/map">Map</a>
                        </li>
                        <li>
                            <a href="/places">Places</a>
                        </li>
                        <li>
                            <a href="/contacts">Contacts</a>
                        </li>
                        <li>
                            <a href="/users">Users</a>
                        </li>
                        <li>
                            <a href="/support">Support</a>
                        </li>

                    </ul>
                </nav>
                {html.children}
            </body>
        </html>
    )


}


module.exports = Def