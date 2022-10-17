import React from "react";

const Help = (p) =>{

    return(
        <>
         <h1 style={{color:"red"}}> This is {p.name}</h1>
        <input type="text" placeholder={p.placeholder}  />
        </>
       
    )
}

export default Help;