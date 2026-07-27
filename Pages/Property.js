import react from "react";


function Fruits(){


    const fruits  = ["apple","Banna","orange"];

    return(

        <>
        
            <div>

                <ul>

                        {fruits .map((fruit,index) => {
                           return <li key={index}>{fruit}</li>

                        })}
                 </ul>
            </div>
        </>
    )


}

export default Fruits;