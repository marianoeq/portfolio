import React from "react";
import Wrapper from "../components/Wrapper";

function contactMe() {
    return (

        <Wrapper>
            <div className="container">
                <section className="mb-4">
                    <h1 className="h1-responsive font-weight-bold text-center my-4 title">Contact Me</h1>
                    <p className="text-center w-responsive mx-auto mb-5">Please do not hesitate to contact me directly. I will come back to you as soon as I can.</p>
                    <div className="row">
                        <div className="col-md-9 mb-md-0 mb-5">
                            <form id="contact-form" name="contact-form" action="mail.php" method="POST">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="md-form mb-0">
                                            <input type="text" id="name" name="name" className="form-control"></input>
                                            <label for="name" className="">Your name</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="md-form mb-0">
                                            <input type="text" id="email" name="email" className="form-control"></input>
                                            <label for="email" className="">Your email</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="md-form mb-0">
                                            <input type="text" id="subject" name="subject" className="form-control"></input>
                                            <label for="subject" className="">Subject</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">

                                        <div className="md-form">
                                            <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea yourMessage"></textarea>
                                            <label for="message">Your message</label>
                                        </div>

                                    </div>
                                </div>
                            </form>
                            <div className="text-center text-md-left">
                                <a className="btn btn-primary" href="s">Send</a>
                            </div>
                            <div className="status"></div>
                        </div>
                        <div className="col-md-3 text-center contactInfo">
                            <ul className="list-unstyled mb-0">
                                <li>
                                    <i className="fas fa-map-marker-alt fa-2x"></i>
                                    <p>Birmingham, B12 0AA, UK</p>
                                </li>
                                <li>
                                    <i className="fas fa-phone mt-4 fa-2x"></i>
                                    <p>07568 564 706</p>
                                </li>
                                <li>
                                    <i className="fas fa-envelope mt-4 fa-2x"></i>
                                    <p>Robbie_Bridgwater@Hotmail.co.uk</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>

            <br></br>
            <br></br>

        </Wrapper>

    )
}

export default contactMe