import './auth.css';
import {useState} from 'react';
import { useNavigate } from "react-router-dom"
import authService  from "../../services/auth.service";

function SignUp() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  // const [agree, setAgree] = useState("");

  const navigate = useNavigate();

  const login = () =>{
    navigate("/");
  }

  const handleSignup = async (e) =>{
    e.preventDefault();
    try {
      await authService.signup(fname, lname, email, password, phone).then(
        (res) =>{
          console.log("sign up success", res);
          navigate("/home");
          // window.location.reload();
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
          <h1>Begin your journey!</h1>
          <p>Get started with the best platform for design</p>

            <form onSubmit={handleSignup}>

            <div className="input-div">
              <div>
                <label htmlFor="">First Name*</label><br/>
                  <input type="text" name="" id="" 
                   value={fname}
                   onChange={(e) => setFname(e.target.value)}
                  />
              </div>

              <div>
                <label htmlFor="">Last Name*</label><br/>
                  <input type="text" name="" id="" 
                    value={lname}
                    onChange={(e) => setLname(e.target.value)}
                  />
              </div>
            </div>
            <div className="input-div">
              <div>
                <label htmlFor="">Email Address*</label><br/>
                  <input type="email" name="" id="" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
              </div>
                  <div>
                <label htmlFor="">Phone Number*</label><br/>
                  <input type="tel" name="" id="" 
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
              </div>
            </div>
            
              <div>
                <label htmlFor="">Password*</label><br/>
                  <input type="password" name="" id="" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
              </div>

              <p>
                <input type="checkbox" name="" id="" 
                  // value={agree}
                  // onChange={(e) => setAgree(e.target.value)}
                />
                    By signing up, you agree to our User Agreement, 
                    Terms of Service, & Privacy Policy
              </p>

              <div>
                <input type="submit" value="Sign Up"  className="sub-btn"/>
              </div>

              <div onClick={login}>
                <span>Already have an account?  
                  Log In
                </span>
              </div>
        
          </form>

        </div>    
      </div>
    </div>
  );
}

export default SignUp;
