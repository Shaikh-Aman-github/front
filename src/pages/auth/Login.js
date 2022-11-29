import './auth.css';
import React, {useState} from "react";
import { useNavigate, Link } from "react-router-dom"
import authService  from "../../services/auth.service";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const fogotPassword = () => {  
    navigate('/newpass')
}

  const handleLogin = async (e) =>{
    e.preventDefault();
    try {
      await authService.login(email, password).then(
        () =>{
          navigate("/home");
           window.location.reload();
        },
        (error) =>{
          console.log(error);
        }
      );
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="SignUp-page">
    <div className="left">
      <div className="lcontent">
      <h1>Welcome to Rsquare.</h1>
      <p>Lets get you all set up so start with your account and begin setting up youe profile.</p>                                                                                                                                                                            
      </div>
    </div>
    <div className="right">
      <div className="rcontent">
      <h1>Welcome back!</h1>
      <p>Please Enter your details.</p>

      <form onSubmit={handleLogin}>

        <div className="login-input-div">
          <div>
            <label htmlFor="">Email Address*</label><br/>
              <input type="email" name="" id="" 
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
              />
          </div>
            <div>
            <label htmlFor="">Password*</label><br/>
              <input type="password" name="" id="" 
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
              />
          </div>
        </div>
        
        <div className="login-input-rem">
          <p><input type="checkbox" name="" id="" />Remember me</p>
          <Link onClick={fogotPassword}>Forgot Password?</Link>
        </div> 

        <div>
          <input type="submit" value="Login"  className="sub-btn"/>
        </div>
    
      </form>

    </div>    
  </div>
</div>
  );
}

export default Login;
