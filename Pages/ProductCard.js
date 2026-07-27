import React from "react";

function Productcard(props){
    return(


        <>
        
        <div style={{border:'1px solid #ccc',padding :'10px',margin:'10px'}}>

                <h2>{props.name}</h2>

                <p>price : {props.price}</p>

                

        </div>
        
        </>
    )
}

export default Productcard;