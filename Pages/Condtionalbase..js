import react from "react";


function Condtionalbase({isonline}){

return(

    <>
        <div>

                <h1>Condtional base </h1>


                <div>
                   {isonline ? <p> user is offline </p> : <p> user is online </p>}
                </div>

        </div>

        
    </>


)

}

export default Condtionalbase;
