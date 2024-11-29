import React, { useState } from "react";
import illust from "../images/illust.png";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({email:"", password:""});
  const HandleSubmit = () => {
    localStorage.setItem("allCredentials", JSON.stringify(credentials));
  }

  const handleLoginbtn = () => {
    navigate('/login')
  }

  const onChangeHandler= (e) =>{
    e.preventDefault()
    setCredentials({...credentials, [e.target.name]: e.target.value})
  }

  return (
    <div>
      <div className="container" style={{ color: "white", marginTop:"5rem", display:"flex", justifyContent:"center" }}>
        <div class="card mb-3">
          <div class="row g-0" style={{padding:"0.5rem"}}>
            <div class="col-md-4" style={{backgroundColor:"#1CAC77", borderRadius:"15px"}}>
              <img src={illust} class="img-fluid rounded-start" alt="illustrator" />
                <h4 style={{display:"flex", justifyContent:"center", color:"white", position:"relative" ,top:"10px"}}>Welcome To SPARK</h4>
                <button className="btn" style={{backgroundColor:"white", color:"#008081", borderRadius:"20px",marginTop:"1.5em", marginBottom:"1.5em", marginLeft:"2em"}} onClick={handleLoginbtn}>{"<"}- Login</button>
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <form onSubmit={HandleSubmit}>
                    <h3 style={{display:"flex", justifyContent:"center", color:"#008081", border:"1px solid white", position:"relative" ,top:"10px"}}>Sign Up</h3>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label" style={{color:"#008081"}}>
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      onChange={onChangeHandler}
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label" style={{color:"#008081"}}>
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      id="password"
                      onChange={onChangeHandler}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary" style={{backgroundColor:"#008081"}}>
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
