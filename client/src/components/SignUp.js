import React, { useState } from "react";

function SignUp(){

    const [formInputs, setFormInputs] = useState({
        username: "",
        email: "",
        contacts: "",
        password: ""
    })

    function handleChange(e){
        setFormInputs(e.target.value);
    }

    function handleClick(e){
        e.preventDefault();
    }

    return(
        <div className="review_form">
          <h3 className="text-center text-uppercase">signin</h3>
            <form className="form sgn_frm">
                {/* <div class="form-floating mb-3">
                  <input onChange={handleChange} value={formInputs.firstname} type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                  <label for="floatingInput">First Name</label>
                </div> */}
                <div class="form-floating mb-3">
                  <input onChange={handleChange} value={formInputs.username} type="text" class="form-control" id="floatingInput" placeholder="Username"/>
                  <label for="floatingInput">Username</label>
                </div>
                <div class="form-floating mb-3">
                  <input onChange={handleChange} value={formInputs.email} type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                  <label for="floatingInput">Email</label>
                </div>
                <div class="form-floating  mb-3">
                  <input onChange={handleChange} value={formInputs.contacts} type="number" class="form-control" id="floatingPassword" placeholder="0755 000 111"/>
                  <label for="floatingPassword">Contacts</label>
                </div>
                <div class="form-floating">
                  <input onChange={handleChange} value={formInputs.password} type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
                  <label for="floatingPassword">Password</label>
                </div>
                <button className="btn btn-primary sgn_btn" onClick={handleClick} type="submit">SignUp</button>
            </form>
        </div>
    )
}

export default SignUp;