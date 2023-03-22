import React from "react";
import strelka from "../../images/strelka.svg";
import "./Portfolio.css";

function Portfolio() {
  return (
    <section className="portfolio">
      <div className="portfolio__main-section">
        <h3 className="aboutMe__title-portfolio">Портфолио</h3>
        <ul className="portfolio__main">
          <li className="portfolio__item">
            <a className="portfolio__link" href="https://github.com/Bumerrr/how-to-learn"
              target="_blank"
              rel="noreferrer">
              <p className="portfolio__link_type_text">Статичный сайт</p>
              <img alt="стрелка" src={strelka} className="portfolio__link_type_image" />
            </a>
          </li>
          <p className="line"></p>
          <li className="portfolio__item">
            <a className="portfolio__link" href="https://bumerrr.github.io/russian-travel/index.html"
              target="_blank"
              rel="noreferrer">
              <p className="portfolio__link_type_text">Адаптивный сайт</p>
              <img alt="стрелка" src={strelka} className="portfolio__link_type_image" />
            </a>
          </li>
          <p className="line"></p>
          <li className="portfolio__item">
            <a className="portfolio__link" href="https://github.com/Bumerrr/react-mesto-api-full"
              target="_blank"
              rel="noreferrer">
              <p className="portfolio__link_type_text">Одностраничное приложение</p>
              <img alt="стрелка" src={strelka} className="portfolio__link_type_image" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Portfolio;