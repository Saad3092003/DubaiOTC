"use client";

import { useState } from "react";

function Mission() {
  const [active, setActive] = useState(0);
  return (
    <div className="row g-5 align-items-center">
      <div className="col-md-5">
        <div
          style={{
            marginLeft: "auto",
            maxWidth: "445px",
            maxHeight: "423px",
            width: "100%",
            height: "auto",
            borderRadius: "17px",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <div className="icon-button-heart position-absolute top-0 end-0 m-3">
            <img src="images/heart-rounded.png" className="img-fluid" alt="" />
          </div>
          <div className="position-absolute bottom-0 ms-4 mb-3 start-0">
            <button className="btn btn-light px-5 rounded-pill">Try Now</button>
          </div>
          <img src="images/vision.png" className="img-fluid" alt="" />
        </div>
      </div>
      <div className="col-md-7">
        <div className="d-flex gap-14 flex-column">
          <div
            onClick={() => setActive(0)}
            className={`d-flex flex-column gap-17 company-tab ${
              active === 0 ? "active" : ""
            } `}
          >
            <div className="d-flex gap-18 align-items-center">
              <div className="icon-square-button">
                <img src="images/zap.png" className="img-fluid" alt="" />
              </div>
              <div className="Heading03">Our Vision</div>
            </div>
            <p className="Paragraph my-0">
              We believe in innovation by merging primary with elaborate ideas.
            </p>
          </div>
          <div
            onClick={() => setActive(1)}
            className={`d-flex flex-column gap-17 company-tab ${
              active === 1 ? "active" : ""
            } `}
          >
            <div className="d-flex gap-18 align-items-center">
              <div className="icon-square-button">
                <img src="images/shield-zap.png" className="img-fluid" alt="" />
              </div>
              <div className="Heading03">Our Mission</div>
            </div>
            <p className="Paragraph my-0">
              We are crafting a digital method that subsists life across all
              mediums.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mission;
