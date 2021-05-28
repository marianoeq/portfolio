import React from "react";
import Wrapper from "../components/Wrapper";
import MasonryGrid from "../components/Masonry";
import TronGrid from "../components/TronGrid";

function Portfolio() {
    return (

        <Wrapper>
            
            <TronGrid></TronGrid>
            <div className="box">

                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center title">
                        <h1>Portfolio<span className='blink'>_</span> </h1>
                    </div>
                </div>

                <br></br>

                <MasonryGrid></MasonryGrid>

            </div>
        </Wrapper>

    )
}

export default Portfolio;