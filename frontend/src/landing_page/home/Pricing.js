import React from "react";

function Pricing() {
  return (
    <div className="container p-5 pt-0">
      <div className="row p-4">
        <div className="col-5 p-4">
          <h3 className="mb-4">Unbeatable pricing</h3>
          <p className="fw-light ">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="" style={{ textDecoration: "none" }}>
            See pricing<i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
        <div className="col-7 d-flex justify-content-between">
          <div className="d-flex align-items-center mb-2 col-3.5">
            <img src="media/images/pricing0.svg" style={{ width: "58%" }} />
            <p className="fw-light small" style={{ fontSize: "10px", marginBottom:0,paddinfBottom:"0"}}>Free account opening</p>
          </div>
          <div className="d-flex align-items-center mb-2 col-5">
            <img src="media/images/pricing0.svg" style={{ width: "44%" }} />
            <p className="fw-light small" style={{ fontSize: "10px" }}>
              Free equity delivery and direct mutual funds
            </p>
          </div>
          <div className="d-flex align-items-center mb-2 col-3.5">
            <img
              src="media/images/intradayTrades.svg"
              style={{ width: "55%" }}
            />
            <p className="fw-light small" style={{ fontSize: "10px" }}>Intraday and F&O</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
