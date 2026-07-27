import React, { useState } from "react";

function FormValidation() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({});


  // Handle input change
  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };


  // Validation function
  const validate = () => {

    let newErrors = {};

    // Name validation
    if (!formData.name) {
      newErrors.name = "Name is required";
    }


    // Email validation
    if (!formData.email) {
      newErrors.email = "Email is required";
    }
    else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }


    // Password validation
    if (!formData.password) {
      newErrors.password = "Password is required";
    }
    else if (formData.password.length < 6) {
      newErrors.password =
        "Password must be minimum 6 characters";
    }


    setErrors(newErrors);


    return Object.keys(newErrors).length === 0;

  };


  // Submit form
  const handleSubmit = (e) => {

    e.preventDefault();


    if (validate()) {

      console.log("Form Data:");
      console.log(formData);

      alert("Form submitted successfully");

    }

  };


  return (

    <div style={{ padding: "20px" }}>

      <h2>Registration Form</h2>


      <form onSubmit={handleSubmit}>


        <div>
          <label>Name:</label>
          <br />

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />

          <p style={{ color: "red" }}>
            {errors.name}
          </p>

        </div>



        <div>
          <label>Email:</label>
          <br />

          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />

          <p style={{ color: "red" }}>
            {errors.email}
          </p>

        </div>



        <div>
          <label>Password:</label>
          <br />

          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />

          <p style={{ color: "red" }}>
            {errors.password}
          </p>

        </div>



        <button type="submit">
          Submit
        </button>


      </form>


    </div>

  );

}

export default FormValidation;
