import React from "react";

function Hero() {
  return (
    <div className="container p-5">
      <div className="row p-5">
        <h1
          className="text-center lh-base"
          style={{ color: "#424242", fontSize: "35px" }}
        >
          We pioneered the discount broking model in India.
          <br />
          Now, we are breaking ground with our technology.
        </h1>
      </div>

      <div className="row px-5 mt-5">
        <hr />
        <div className="col-6  p-5">
          <p className="lh-lg mt-4">
            We kick-started operations on the 15th of August, 2010 with the goal
            of breaking all barriers that traders and investors face in India in
            terms of cost, support, and technology. We named the company
            Zerodha, a combination of Zero and "Rodha", the Sanskrit word for
            barrier.
          </p>
          <p className="lh-lg">
            Today, our disruptive pricing models and in-house technology have
            made us the biggest stock broker in India.
          </p>
          <p className="lh-lg">
            Over 1.6+ crore clients place billions of orders every year through
            our powerful ecosystem of investment platforms, contributing over
            15% of all Indian retail trading volumes.
          </p>
        </div>
        <div className="col-6 p-5">
          <p className="lh-lg mt-4">
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
          </p>
          <p className="lh-lg">
            <a href="https://rainmatter.com" style={{ textDecoration: "none",color:"#387ed1",fontWeight:"500" }}>
              Rainmatter
            </a>
            , our fintech fund and incubator, has invested in several fintech
            startups with the goal of growing the Indian capital markets.
          </p>
          <p className="lh-lg">
            And yet, we are always up to something new every day. Catch up on
            the latest updates on our{" "}
            <a href="https://zerodha.com/z-connect/" style={{ textDecoration: "none",color:"#387ed1",fontWeight:"500" }}>
              blog
            </a>{" "}
            or see what the <br/>media is{" "}
            <a href="https://zerodha.com/media" style={{ textDecoration: "none",color:"#387ed1",fontWeight:"500" }}>
              saying about us
            </a>{" "}
            or learn more about our business and product{" "}
            <a href="https://zerodha.com/about/philosophy/" style={{ textDecoration: "none",color:"#387ed1",fontWeight:"500" }}>
              philosophies
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
