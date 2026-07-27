import React, { useState } from "react";


function countpanel(){

    alert('test');
}


function Car(props){


    const {brand}  = props;
    
    const text = `hi welcome ${brand} `;

    const [isvisible,setIsvisible] = useState(false);

    const toggletext = () => {

        setIsvisible(isvisible);

     }

     const element = <h2>Hello Comment </h2>

    return (

        <>
        <div>

            <h1>{text}</h1>
            <h2>Hell0</h2>

        <button onClick={toggletext}>
            {isvisible ? 'hide text' : 'show text' }
        </button>


        <p>{element}</p>

     
        </div>

        <div className="lorum_content">
            lorum contentnt lorum contentntlorum contentntlorum contentntlorum contentntlorum contentnt
        </div>

        <div>
            <button onClick={countpanel}>Count</button>
        </div>


        </>


    );



}


export default Car;