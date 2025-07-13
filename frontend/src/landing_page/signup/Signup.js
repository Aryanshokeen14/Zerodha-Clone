import React from "react";
import "./signup.css";
const buttonStyle = {
  backgroundColor: "#387ed1",
  width: "55%",
  margin: "0 auto",
  border: "1px solid",
};
const handleRefresh = () => {
    window.location.reload(); // Triggers a full page reload
  };

function SignUp() {
  return (
    <div className="container text-center">
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h2>Open a free demat & trading account online</h2>
      <p className="lh-3">
        Start investing brokerage free and join a community of 1.5+ crore
        investors and traders
      </p>
      <div className="row" style={{marginBottom:"90px"}}>
        <div className="col-1"></div>
        <div className="col-7 text-end p-5" style={{ width: "45%" }}>
          <img src="media/images/signupImage.svg" />
        </div>
        <div className="col-4 text-start mt-5">
          <h3 className="mt-5">Signup now</h3>
          <p style={{color:"grey"}}>Or track your existing application</p><br/>
          <input
            type="number"
            id="myNumber"
            placeholder="Enter your mobile number"
            className="no-spinner border border-gray-300 p-2 rounded"
            style={{width:"60%"}}
          ></input>
          <br />
          <button
          type='submit'
            onClick={handleRefresh}
            className="no-spinner p-2 btn btn-primary fs-5 mb-5 mt-3"
            style={buttonStyle}
          >
            Get OTP
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
