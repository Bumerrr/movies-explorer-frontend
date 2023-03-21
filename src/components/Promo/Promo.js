import React from "react";
import landinglogo from "../../images/promo.png";
import "./Promo.css";

const Promo = () => {
  return (
    <section className="promo">
      <div className="promo__main">
        <div className="promo__main-text">
          <h1 className="promo__title">
            Учебный проект студента факультета Веб-разработки.
          </h1>
          <p className="promo__subtitle">
            Листайте ниже, чтобы узнать больше про этот проект и его создателя.
          </p>
          <a href="https://practicum.yandex.ru/" className="promo__btn"
          target="_blank"
          rel="noreferrer"
          >Узнать больше</a>
        </div>
        <img className="promo__logo" src={landinglogo} alt="landing-logo" />
      </div>
    </section>
  );
};

export default Promo;