import React from "react";
import "./App.css";

function Home() {
    
    const openPricingModule = () => {

        window.open(
            "http://127.0.0.1:8000",
            "_blank"
        );
    };

    return (

        <div className="container">

            <div className="overlay">

                <h1>
                    Film Licensing AI
                </h1>

                <p>
                    AI Powered Pricing & Deal Estimation Platform
                </p>

                <div className="button-group">

                    <button onClick={openPricingModule}>
                        Open Pricing Module
                    </button>

                    <button
                        onClick={() =>
                            window.location.href = "/history"
                        }
                    >
                        View Pricing History
                    </button>

                </div>
                
            </div>

        </div>
    );
}

export default Home;