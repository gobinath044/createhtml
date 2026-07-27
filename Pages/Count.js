import React, { useState } from "react";


function Counter() {

    const [count,setcount] = useState(0);

    return(

        <>
            <div>
            
            <h2>{count}</h2>

            <button onClick={() => setcount(count+1) }> Submit </button>

            <button onClick={() => setcount(count -1) }> Reverse </button>
            </div>
        
        
        </>


    )


}


export default Counter;