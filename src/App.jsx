import { useState } from "react";

const App = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const login = () => {
    console.log(`email:${email}\npass:${pass}`);
  };
  return (
    <>
      <div className="wrapper">
        <div className="section1">
          <h1>Sign in to your Account</h1>
          <p>Sign in to your Account</p>
        </div>
        <div className="section2">
          <div className="emailContainer">
            <input onChange={(e)=>{
              setEmail(e.target.value);
            }} value={email} type="email" />
            <i className="fa-regular fa-user" style={{ color: "#000000" }}></i>
          </div>
          <div className="passContainer">
            <input onChange={(e)=>{
              setPass(e.target.value);
            }} value={pass} type="password" />
            <i className="fa-regular fa-eye" style={{ color: "#000000" }}></i>
          </div>
          <p className="forgot">Forgot Password?</p>
          <button
            onClick={() => {
              login();
            }}
            className="btn"
          >
            Login
          </button>
          <div className="divider">
            <hr />
            Or login with <hr />
          </div>
          <div className="social">
            <div className="item">
              <i
                className="fa-brands fa-google"
                style={{ color: "#000000" }}
              ></i>
              Google
            </div>
            <div className="item">
              <i
                className="fa-brands fa-square-facebook"
                style={{ color: "#000000" }}
              ></i>
              Facebook
            </div>
          </div>
          <div className="endText">
            Don't have an account? <span>Register</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
