import React, { useState } from "react";

function StudentForm() {

const [student, setStudent] = useState({
    id:"",
    name:"",
    department:""
});


const [students, setStudents] = useState([]);

const handleChange = (e)=>{

    setStudent({
        ...student,
        [e.target.name]: e.target.value
    });

};


const handleSubmit = (e)=>{

    e.preventDefault();
    setStudents([
        ...students,
        student
    ]);
    setStudent({
        id:"",
        name:"",
        department:""
    });

};



return (

<div style={{padding:"20px"}}>


<h2>Student Form</h2>


<form onSubmit={handleSubmit}>


<label>ID</label>
<br/>

<input
type="text"
name="id"
value={student.id}
onChange={handleChange}
/>

<br/><br/>


<label>Name</label>
<br/>

<input
type="text"
name="name"
value={student.name}
onChange={handleChange}
/>

<br/><br/>


<label>Department</label>
<br/>

<input
type="text"
name="department"
value={student.department}
onChange={handleChange}
/>


<br/><br/>


<button type="submit">
Submit
</button>


</form>



<hr/>


<h2>Student Grid</h2>


<table
border="1"
cellPadding="10"
width="100%"
>


<thead>

<tr>

<th>ID</th>
<th>Name</th>
<th>Department</th>

</tr>

</thead>



<tbody>


{
students.map((row,index)=>(

<tr key={index}>

<td>{row.id}</td>

<td>{row.name}</td>

<td>{row.department}</td>


</tr>


))
}


</tbody>


</table>



</div>

);


}


export default StudentForm;
