import React from "react";
import "../styles/bestsellers.css";

export const BestSellers = () => {
  return (
    <section className="bestsellers-container grid">
      <div className="book-grid">
        <div className="book">
          <img
            className="book-img"
            src="https://live.staticflickr.com/65535/52623409645_b606a53f02_o.png"
          />
          <p className="book-author">Amanda Brown</p>
          <p className="book-title">Legale Blonde</p>
        </div>
        <div className="book">
          <img
            className="book-img"
            src="https://live.staticflickr.com/65535/52623409640_bdbc39834f_o.png"
          />
          <p className="book-author">Jay Martel</p>
          <p className="book-title">Chonnel Blue</p>
        </div>
        <div className="book">
          <img
            className="book-img"
            src="https://live.staticflickr.com/65535/52623409630_a8ac3ba049_o.png"
          />
          <p className="book-author">Chloe Rayban</p>
          <p className="book-title">Drama Queen</p>
        </div>
        <div className="book">
          <img
            className="book-img"
            src="https://live.staticflickr.com/65535/52623457673_eb3b43c9fd_o.png"
          />
          <p className="book-author">Mark Roberts</p>
          <p className="book-title">Day of the Dead </p>
        </div>
        <div className="book">
          <img
            className="book-img"
            src="https://live.staticflickr.com/65535/52622462247_4a60b0a229_o.png"
          />
          <p className="book-author">Nardine Dorries</p>
          <p className="book-title">The Four Streets</p>
        </div>
        <div className="book">
          <img
            className="book-img"
            src="https://live.staticflickr.com/65535/52622462202_6842781b0b_o.png"
          />
          <p className="book-author">Margaret Mitchell</p>
          <p className="book-title">Gone with the wind</p>
        </div>
      </div>
    </section>
  );
};
