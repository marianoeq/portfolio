import React from "react";
import Wrapper from "../components/Wrapper";
import TronGrid from "../components/TronGrid";

function contactMe() {
    return (

        <Wrapper>
            <TronGrid></TronGrid>

            <div className="container mainContent box">

                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center title">
                    <h1>Contact Me<span className='blink'>_</span> </h1>
                </div>
                <div className="tab">&#123;</div>
                <div className="formBox">
                    <form action="mailto:Robbie_Bridgwater@Hotmail.co.uk" method="get" enctype="text/plain">
                        <div>
                            <label for="name"><span className='objKey'>Name</span>:
                            <input type="text" name="name" id="name" />
                            </label>
                        </div>
                        <div>
                            <label for="email"><span className='objKey'>Email</span>:
                            <input type="text" name="email" id="email" />
                            </label>
                        </div>
                        <div>
                            <label><span className='objKey'>Message</span>:</label>
                            <br />
                            <textarea name="comments" rows="12" cols="35"> "get in touch."</textarea>
                        </div>
                        <div>
                            <div className="formButtons">
                                <input type="submit" align="center" name="submit" value="Send" />
                                <input type="reset" align="center" name="reset" value="Clear Form" />
                            </div>
                        </div>
                    </form>
                    <div style={{textAlign: 'left'}}>&#125;</div>

                </div>
            </div>


            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

        </Wrapper>

    )
}

export default contactMe