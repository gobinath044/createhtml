import React from "react";


const Event  = () => {


    function Count(){

            Count = Count + 1;

            console.log(Count); 

    }


    return (

        <>

                    <h1>Test Panel </h1>

                    <h1>Test Panel </h1>
                    <button onClick={Count}>Click</button>
                    
        
        </>


    )


} 

export default Event;