import React from "react";
import "./Techs.css";

const Techs = () => {
  return (
    <section className="techs">
      <div className="techs__main">
        <h2 className="techs__title-section">Технологии</h2>
        <p className="line"></p>
        <h3 className="techs__title">7 технологий</h3>
        <p className="techs__subtitle">
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </p>
        <ul className="techs-cards">
          <li className="techs-card__item">
            <p className="techs-card__text">HTML</p>
          </li>
          <li className="techs-card__item">
            <p className="techs-card__text">CSS</p>
          </li>
          <li className="techs-card__item">
            <p className="techs-card__text">JS</p>
          </li>
          <li className="techs-card__item">
            <p className="techs-card__text">React</p>
          </li>
          <li className="techs-card__item">
            <p className="techs-card__text">Git</p>
          </li>
          <li className="techs-card__item">
            <p className="techs-card__text">Express.js</p>
          </li>
          <li className="techs-card__item">
            <p className="techs-card__text">mongoDB</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Techs;