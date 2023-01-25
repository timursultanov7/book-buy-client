import React, { useRef, useState, useEffect } from "react";

import "../styles/featured-in.css";

export const FeaturedIn = ({ featuredInRef }) => {
  return (
    <div>
      <section className="section-featured ">
        <div className="container">
          <h2 className="heading-featured-in">As featured in</h2>
          <div className="logos">
            <img
              src="https://live.staticflickr.com/65535/52646480550_edfc21fa16_o.png"
              alt="Techcrunch"
            />
            <img
              src="https://live.staticflickr.com/65535/52646519583_5cd8cf11cc_o.png"
              alt="Business Insider"
            />
            <img
              src="https://live.staticflickr.com/65535/52645533392_7fa39391b5_o.png"
              alt="New York Times"
            />
            <img
              src="https://live.staticflickr.com/65535/52646044736_5a2955faaa_o.png"
              alt="Forbes"
            />
            <img
              src="https://live.staticflickr.com/65535/52646480530_f55af8f8f3_o.png"
              alt="USA Today"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
