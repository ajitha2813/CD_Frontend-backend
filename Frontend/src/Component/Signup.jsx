
import { Link } from "react-router-dom";
import axios from 'axios';
import { jwtDecode} from "jwt-decode"
import { useNavigate } from "react-router-dom";
import "./Signup.css"
import { useState } from "react";
const Signup = () => {
  
  const [change, setChange] = useState("login")
  const navigate = useNavigate()
  const [firstname, setFirstname] = useState("")
  const [email, setEmail] = useState("")


  const [lastname, setLastname] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e) => {
    console.log("Hi");

    e.preventDefault();
    change === "login" ? handleLogin() : handleSignup();
  }
  const handleSignup = async () => {
    console.log("signup");

    try {

      const response = await axios.post("http://localhost:3000/api/register/create",
        {
          firstName: firstname,
          lastName: lastname,
          email: email,
          password: password,
          role: "user"
        })
   
       setChange("login")

      
    }
    catch (err) {
      console.log(err)
    }
  }
  const handleLogin = async () => {


    try {

      const response = await axios.post("http://localhost:3000/api/login/user", {

        email: email,
        password: password
      })

      const token=response.data.token
      localStorage.setItem("authtoken",token)
      const gettoken=localStorage.getItem("authtoken")
      console.log(gettoken)
      const decoded = jwtDecode(gettoken)
      console.log('decode',decoded)
      if(decoded.role === "admin"){
      navigate('/dashboard')
      }
    }

    catch (err) {

    }
  }



  return (
    <div>

      <div className="signup-container">

        <h1>{change}</h1>
          < form id="signup-form" onSubmit={(e) => handleSubmit(e)}>
        <div className="form-group">
          {change === "login" ? <p></p> :
            <input
              onChange={(e) => { setFirstname(e.target.value) }}
              type="text"
              id="Firstname"
              name="Firstname"
              placeholder="Firstname"
            />
          }
        </div>
        <div className="form-group">
          {change === "login" ? <p></p> :
            <input
              onChange={(e) => { setLastname(e.target.value) }}
              type="text"
              id="Lastname"
              name="Lastname"
              placeholder="Lastname"
            />}
        </div>

        <div className="form-group">
          <input
            onChange={(e) => { setEmail(e.target.value) }}
            type="email"
            id="email"
            name="email"
            placeholder="E-mail"
          />
        </div>
        <div className="form-group">
          <input
            onChange={(e) => { setPassword(e.target.value) }}
            type="password"
            id="password"
            name="password"
            placeholder="Password"
          />
        </div>


        {change === "signup" ?
          <p>
            <button type="submit" >
              {change}

            </button>
            Already have an account? <a onClick={() => { setChange("login") }}>login</a>

          </p>
          :
          <p>
            <button type="submit">
              {change}
            </button>
            Do you have a Account? <a onClick={() => { setChange("signup") }}>signup</a>

          </p>
        }
      </form>
    </div>
    <div>
<table>
  <thead>
    
  </thead>
</table>
    </div>
    </div >
    )
}

export default Signup;
// import React, { useState } from 'react';

// function Signup({ formType, onLogin, onSignup }) {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//     // Add other signup fields as needed
//     firstName: '',
//     lastName: '',
//     role:''
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (formType === 'login') {
//       onLogin(formData); // Call the login function passed as a prop
//     } else {
//       onSignup(formData); // Call the signup function passed as a prop
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       {/* Login or Signup Heading */}
//       <h2>{formType === 'login' ? 'Login' : 'Sign Up'}</h2>

//       {/* Email Input */}
//       <label htmlFor="email">Email:</label>
//       <input
//         type="email"
//         id="email"
//         name="email"
//         value={formData.email}
//         onChange={handleChange}
//         required
//       />

//       {/* Password Input */}
//       <label htmlFor="password">Password:</label>
//       <input
//         type="password"
//         id="password"
//         name="password"
//         value={formData.password}
//         onChange={handleChange}
//         required
//       />

//       {/* Signup Specific Fields */}
//       {formType === 'signup' && (
//         <>
//           <label htmlFor="firstName">First Name:</label>
//           <input
//             type="text"
//             id="firstName"
//             name="firstName"
//             value={formData.firstName}
//             onChange={handleChange}
//             required
//           />

//           <label htmlFor="lastName">Last Name:</label>
//           <input
//             type="text"
//             id="lastName"
//             name="lastName"
//             value={formData.lastName}
//             onChange={handleChange}
//             required
//           />
//           <label htmlFor="role">Role:</label>
//           <input
//             type="text"
//             id="role"
//             name="role"
//             value={formData.role}
//             onChange={handleChange}
//             required
//           />
//         </>
//       )}

//       {/* Submit Button */}
//       <button type="submit">{formType === 'login' ? 'Login' : 'Sign Up'}</button>
//     </form>
//   );
// }

// export default Signup;