import React, { useState } from "react";

function Login() {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
    setError(""); // Clear errors as user types
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!formData.username || !formData.password) {
      setError("All fields are required");
      return;
    }

    // Mock login success
    setSuccess(true);
    setError("");
  };



  return (
    <div style={{ maxWidth: "400px", margin: "auto" }}>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <input 
            type="text" 
            name="username" 
            value={formData.username} 
            onChange={handleChange} 
          />
        </div>
        <div>
          <label>Password</label>
          <input 
            type="password" 
            name="password" 
            value={formData.password} 
            onChange={handleChange} 
          />
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit">Login</button>
      </form>

      {success && (
        <p style={{ color: "green" }}>Login successful! Welcome {formData.username}.</p>
      )}


      
    </div>
  );
}

export default Login;
