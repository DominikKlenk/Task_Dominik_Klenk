import React from "react";
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import '../Style/links.css';

function ErrorPage() {
    return (        
        <div>
            <div>
                <h2>Error! Page not found</h2>                
            </div>

            <div>
                <Link className='Link-Style' to="/"> Go back home </Link>
            </div>
        </div>
    );
}

export default ErrorPage;