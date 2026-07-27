import react from "react";


function ContactForm(){


    const handleSubmit = (e) => {

        const{name,value} = e.target;

        // setFormData(prev =>   ({

        //     ...prev,
        //     [name] : value

        // }));

    } 



    const hanlesubmit = (e) => {

        e.preventDefault();


        setSubmbitdata(FormData);

        setFormData();



    }


    return (

        <>  
            <div className="">

             <h2>Contact</h2>

                <form className="" onSubmit={handleSubmit}>

                    <input type="text" name="name" placeholder="Your Name" value={FormData.name} />

                    <input type="text" name="email" placeholder="Your email" value={FormData.email} />

                    <textarea value={FormData.message} name="message" placeholder="Your message">
                    </textarea>  

                <button type="submit" className="bg-blue-500" > Submit </button>


                </form>


                {submittedData && (
                <div className="mt-6 p-4 bg-gray-100 rounded">
                    <h3 className="font-semibold">Submitted Data:</h3>
                    <p><strong>Name:</strong> {submittedData.name}</p>
                    <p><strong>Email:</strong> {submittedData.email}</p>
                    <p><strong>Message:</strong> {submittedData.message}</p>
                </div>
      )}



            </div>
        

        
        
        </>



    )


}




export default ContactForm;