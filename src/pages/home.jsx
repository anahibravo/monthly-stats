import React from "react";
import {Link} from "react-router-dom"

export function Home(){
    return (
        <div className="home--container">
            <h1 className="home--heading">Monthly Statistics</h1>
            
            <Link to="/Info"> 
            <button className="home--button"> Start </button>
            </Link>
            
        
        </div>
        
    )
}