import React from "react";

function Education() {
  return (
    <div className="container p-5 pt-0">
      <div className="row p-4">
        <div className="col-6">
          <div className="d-flex align-items-center mb-2 col-3.5">
            <img src="media/images/education.svg" style={{ width: "80%" }} />
          </div>
        </div>
        <div className="col-6 p-3">
          <h3>Free and open market education</h3>
          <p className="fw-light mt-4">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a href="/" style={{ textDecoration: "none" }}>
            Varsity<i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
          <p className="fw-light mt-4">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a href="/"style={{ textDecoration: "none" }}>
            TradingQ&A
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
