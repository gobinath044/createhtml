import React, { useState }  from "react";

function DynamicList(){


    const[items,setitems] = useState([item1,item2]);


    const additem = () =>{


        setitems([...items,setitems]) = useState(['Item1','Item2']);

        const addItem = () => {
                setitems([...items,`Item $(items.length + 1)`]);
                console.log("That is content");

        }

        const edititem = () => {
                setitems([...items,`Item $(items.length + 2)`]);


        }

     
    }
};


return (

    <>
        
        <div>

            <ul>

                <li>  </li>


            </ul>




        </div>
    

    
    </>



);

export default DynamicList;


