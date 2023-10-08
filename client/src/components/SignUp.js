import React, { useEffect, useState } from "react";
import axios from "axios";
import Login from "./Login";
import { Link, NavLink, useNavigate} from 'react-router-dom';


function SignUp({ setuserid, setIsLoggedIn}){
  const navigate = useNavigate();

  


    const [formInputs, setFormInputs] = useState({
        username: "",
        email: "",
        contacts: "",
        password: ""
    })
    const [username, setusername] = useState('')
    const [email, setemail] = useState('')
    const [contacts, setcontacts] = useState('')
    const [password, setpassword] = useState('')

   function handleChange(e) {
    if (e.target.placeholder == 'Username'){

      setusername(e.target.value)

    }else if (e.target.placeholder == 'Email'){
      setemail(e.target.value)

    }else if (e.target.placeholder == 'Contacts'){
      setcontacts(e.target.value)

    }else if (e.target.placeholder == 'Password'){
      setpassword(e.target.value)

    }

    let signup_form = {
      username: username,
      email: email,
      contacts: contacts,
      password: password

    }
    

    console.log(signup_form)
  }  


  async function handleSubmit(e) {
    e.preventDefault();

    try {
      let signup_form = {
        username: username,
        email: email,
        contacts: contacts,
        password: password
  
      }
      const response = await axios.post('https://swift-review-api-5vgv.onrender.com/users', signup_form );
      

      console.log(response)

  
      console.log("Response:", response.data);

      if (response){
        setusername('')
        setemail('')
        setcontacts('')
        setpassword('')
       
        console.log(response)
        setuserid(response.data.id)
        setIsLoggedIn(true)
        console.log(response.data.id)
        navigate('/')
      }

      

      
    } catch (error) {
      
      console.error("Error:", error);
    }
  }
    return(
        <div className="review_form sgn_pstn">
          <h3 className="text-center text-uppercase">SIGNUP</h3>
            <form className="form sgn_frm" onSubmit={(e) => handleSubmit(e)}>
                <div class="form-floating mb-3">
                  <input onChange={handleChange} type="text" value= {username} class="form-control" id="floatingInput" placeholder="Username"/>
                  <label for="floatingInput">Username</label>
                </div>
                <div class="form-floating mb-3">
                  <input onChange={handleChange} type="email" value ={email} class="form-control" id="floatingInput" placeholder="Email"/>
                  <label for="floatingInput">Email</label>
                </div>
                <div class="form-floating  mb-3">
                  <input onChange={handleChange} type="number" value ={contacts} class="form-control" id="floatingPassword" placeholder="Contacts"/>
                  <label for="floatingPassword">Contacts</label>
                </div>
                <div class="form-floating">
                  <input onChange={handleChange} type="password" value ={password} class="form-control" id="floatingPassword" placeholder="Password"/>
                  <label for="floatingPassword">Password</label>
                </div>
                <button className="btn btn-primary sgn_btn" type="submit">SignUp</button>
            </form>
            <div>
              <p>Already Have An account?</p>
              <a href ='Login'><p>Login</p></a>
            </div>
        </div>
    )
}

export default SignUp;