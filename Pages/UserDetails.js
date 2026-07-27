import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const UserSelect = () => {

    const users = [

        {

            "id" : 1,
            Username : 'vinothu'

        },
        {
            "id" : 2,
            Username:'Gobinath'
        },
        {
            "id" : 3,
            Username:'suresh'
        }

    ];


    const [selectUserid,setSelectUserId] = useState("");

    const [selectUsername,setSelectUsername] = useState("");

    const[ShowUsernameSelect,setShowUsernameSelect] = useState("");


    const  handleUserChange = (e) => {

//alert('test');

        const userid = e.target.value;

        console.log(userid);
        console.log(userid);

        setSelectUserId(userid);

        const user = users.find((u) => u.id.toString() === userid)

        if(users){
            setSelectUsername(user.Username);
            setShowUsernameSelect(true);
        }
        else{
            setSelectUsername();
            setShowUsernameSelect(false);
        }

    }
    
    return (

        <>
    <div>
            <label>User ID</label>
            <select value={selectUserid} onChange={handleUserChange}>
                <option value="">Select User ID</option>
                {users.map ((user) => (
                    <option value={user.id}>
                        {user.id}
                    </option>
                ))}
            </select>

            </div>

            <div>
                <label>Username</label>
                <select value={selectUsername} readonly>
                    <option value="selectUsername"> {selectUsername } </option>
                </select>
            </div>

            <div>
                <label>UserDetails</label>
                <select>
                    <option> First </option>
                    <option> Second </option>
                    <option> Second </option>
                </select>
            </div>

             
        </>


    )
     
}


export default UserSelect;