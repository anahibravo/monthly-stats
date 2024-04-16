import React from "react";


export function Info(){
    return (
    <div className="info--container">
        <h1 className="info--heading">Information</h1>

    <form className="info--form">   
        <label className="info--input">
        Library Name <input name="libraryname" />
        </label>

        <label className="info--input">
        Month <input name="month" />
        </label>

        <label className="info--input">
        Year <input name="year" />
        </label>

        <label className="info--input">
        Upload <input type="file"/>
        </label>

        <button className="info--button" type="submit">GO</button>

    </form> 


    </div>
    )
}