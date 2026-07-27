import React,{useState} from 'react';

function Simple() {

    const[formData,setFormData]  = useState ({
            name :'',
            email:''
     });

     const[tableData,settableData] = useState([]);


     const handleChange = (e) => {

        const {name,value} = e.target;

        setFormData(prevData => ({ 
            ...prevData,
           [name]: value
         
        }));

    }

    const handleSubmit = (e) =>{

        e.preventDefault();

         if(formData.name || formData.email) {
              
            settableData(prev => [...prev,formData]);
            setFormData ({name : '',email : ''});

         }   

        //alert(`submitted:\n Name : ${formData.name} \n Email': ${formData.email}`);

     }




return (
    <>
       <form onSubmit={handleSubmit} className="p-4 max-w-md mx-auto">

            <div className='col-sm-4'>
                <label className=''>Name</label>
                <input type='text' onChange={handleChange} name="name" className='form-control'/>
            </div>  
            
            <div className='col-sm-4'>
                <label className=''>Email</label>
                <input type='text' onChange={handleChange} name="email" className='form-control'/>
            </div>


            <button type='submit' className='btnsubmit'> Submit</button>


        </form>

   
        <div className="p-4 max-w-md mx-auto">
        <h4>Submitted Data</h4>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>

                {tableData.map((entry,index) => (
                    <tr key={index}>
                        <td>{index + 1}</td>    
                        <td>{entry.name}</td>
                        <td>{entry.email}</td>    
                     </tr>
                
                ))};


          </tbody>
         
        </table>
      </div>
    
    </>



)
}

export default Simple;
