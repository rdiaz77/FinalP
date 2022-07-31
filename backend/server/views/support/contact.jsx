const React = require("react")
const Def = require("../layouts/default")


function contactForm(){

    return(
        <Def>
             <main>
                <h1> This is the contact form</h1>
                <form action="/support" method='POST'>
                    <div>
                        <label htmlFor="firstName">First Name"</label>
                        <input type="text" name="firstName" id="firstName" required/>
                    </div>

                    <div>
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" name="lastName" id="lastName" />
                    </div>

                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" id="email" required/>
                    </div>

                    <div>
                        <label htmlFor="topic">Topic</label>
                        <select name="topic" id="topic" required>
                            <option value="Select">Select Topic</option>
                            <option value="software">Problem with the App - Software</option>
                            <option value="missingInfo">Missing Information</option>
                            <option value="requirement">Send a requirement</option>
                            <option value="congratulations">Congratulate the team</option>
                            <option value="otherQuestions">Other Questions</option>
                            
                        </select>
                    </div>

                    <div>
                        <label htmlFor="comment">Comment</label>
                        <textarea name="comment" id="comment" cols="30" rows="10" required></textarea>
                    </div>

                    <div>
                        <input type="submit" value="Send" />
                    </div>

                </form>
            </main>

        </Def>
    )
}

module.exports = contactForm