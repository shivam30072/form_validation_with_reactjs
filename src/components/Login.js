import { useState } from "react";
import React from "react";

import "./styles.css";

function login() {

  const initialValues = {username: "", password: ""};
  const [formValues, setFormVAlues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});


  const  handleChange = (e) => {
       const {name, value}  = e.target;
       setFormVAlues({...formValues, [name]: value });
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      setFormErrors(validate(formValues));
      

   };

   const validate = (values) => {
         const errors = {}
         const regex = /^[A-Za-z][A-Za-z0-9_]{7,29}$/;

         if(!values.username){
          errors.username = "username is required!"
         }else if(!regex.test(values.username)){
          errors.username = "not a valid username!"
         }
         if(!values.password){
          errors.password = "password is required!"
         }else if(values.password.length < 8){
          errors.password = "password must be greater than 8 characters!"
         }else if(values.password.length > 16){
          errors.password = "password must be less than 16 characters !"
         }
         return errors;

   }

  return (
    <div className="container">
         
      <form  id="login-form">
      <h1 className="login">Log in</h1>
        <div className="username-div">
         <label className="username">Username</label>
          <input className="input-username" type="text" placeholder="Shivam" name="username"  value={formValues.username}  
          onChange = {handleChange}
          />
        <p id = "username-warning">{formErrors.username}</p>
        </div>
        <div className="password-div">
         <label className="password"> Password</label>
          <input className="input-password" type="password" placeholder="password" name="password" value={formValues.password}
           onChange = {handleChange}
          />
          <p id="password-warning"> {formErrors.password}</p>
        </div>
        <div className="checkbox-div">
            <input className="box" type= "checkbox" /> 
            <label className="remember">Remember me</label>
        </div>
        <div className="button-div">
            <button className="button" onClick={handleSubmit}>Login</button>
        </div>
        <div className="signup-div">
            <span className="signup">Sign up?</span>
        </div>
      </form>

      
  

    </div>


  );



}


export default login;
