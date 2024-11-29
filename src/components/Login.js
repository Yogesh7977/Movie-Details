import React, { useState } from 'react'
import illust from "../images/illust.png";
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const [credentials2, setCredentials] = useState({email:"", password:""});

    const navigate = useNavigate();
    const HandleSubmit = () => {
        let getCredentials1 = JSON.parse(localStorage.getItem("allCredentials"));
        console.log(getCredentials1, getCredentials1.email, getCredentials1.password);
        if(getCredentials1 && getCredentials1.email === credentials2.email && getCredentials1.password === credentials2.password)
        {   
            const email3 = getCredentials1.email
            navigate(`/home/${email3}`);
        }
        else{
            alert("Invalid Credentials");
        }
      }
    const handleLoginbtn = () => {
        navigate('/signUp')
      }

    const onChangeHandler= (e) =>{
        e.preventDefault()
        setCredentials({...credentials2, [e.target.name]: e.target.value})
      }
  return (
    <div>
      <div className="container" style={{ color: "white", marginTop:"5rem", display:"flex", justifyContent:"center" }}>
        <div class="card mb-3">
          <div class="row g-0" style={{padding:"0.5rem"}}>
            <div class="col-md-4" style={{backgroundColor:"#1CAC77", borderRadius:"15px"}}>
              <img src={illust} class="img-fluid rounded-start" alt="illustrator" />
                <h4 style={{display:"flex", justifyContent:"center", color:"white", position:"relative" ,top:"10px"}}>Welcome To SPARK</h4>
                <div style={{display: "flex", justifyContent: "flex-end"}}>
                <button className="btn" style={{backgroundColor:"white", color:"#008081", borderRadius:"20px", marginTop:"1.5em", marginBottom:"1.5em", right:"2em", position:"relative"}} onClick={handleLoginbtn}>Sign Up -{">"}</button>
                </div>
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <form onSubmit={HandleSubmit}>
                    <h3 style={{display:"flex", justifyContent:"center", color:"#008081", border:"1px solid white", position:"relative" ,top:"10px"}}>Login</h3>
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
  )
}

export default Login
