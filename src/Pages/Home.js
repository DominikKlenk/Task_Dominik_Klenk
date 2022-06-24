import React from "react";
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import '../Style/links.css';

function Home() {
    return (
        <div>
            <div>
                <h2>This is the Home component.</h2>
            </div>
            
            <div className="Link-Surrounding">
                <Link className='Link-Style' to="/details"> Click here to get to the Details. </Link>
            </div>
        </div>
        
    );

}

export default Home;