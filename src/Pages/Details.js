import React from "react";
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import '../Style/buttons.css'


function Details() {
        return (
        <div>
            <div>
                <h2>This is the Details component.</h2>                     
            </div>

            <div>
                <Link to="/">
                    <button className="Button-Style">
                        Back Home
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Details;