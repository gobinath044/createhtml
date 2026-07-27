import React from "react";
import { useEffect,useState } from "react";


function Eventer(){
   
    const[Users,setuser] = useState([]);  

    const[Search,SetSearch] = useState("");


     useEffect(()=> {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => setuser(data))
        .catch((error) => console.log(error))
     });



    const filteredUsers = Users.filter((user) =>
      user.name.toLowerCase().includes(Search.toLowerCase())
     );



    return(

        <>
            <div>

                    <input value={Search} placeholder="Enter the User" onChange={(e) => SetSearch(e.target.value)} type="text"/>

                <ul>


                    {filteredUsers.map((user) => (

                        <li key={user.id}>
                            {user.name}

                        </li>    

                    ))}


                </ul>

            </div>
        </>


    )



}


export default Eventer;