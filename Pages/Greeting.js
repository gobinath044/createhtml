import react from "react";

function Greeting(Props){

    if(Props.isLoggedIn){

        return <h1>Welcome sigin </h1>
    }
    else{
        return <h1> Please Sigin in.. </h1>
    }


}


export default Greeting;


