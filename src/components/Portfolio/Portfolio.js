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
            <a className="portfolio__link" href="https://github.com/Bumerrr/how-to-learn">
              <p className="portfolio__link-text">Статичный сайт</p>
              <img alt="стрелка" src={strelka} />
            </a>
          </li>
          <p className="line"></p>
          <li className="portfolio__item">
            <a className="portfolio__link" href="https://github.com/Bumerrr/russian-travel">
              <p className="portfolio__link-text">Адаптивный сайт</p>
              <img alt="стрелка" src={strelka} />
            </a>
          </li>
          <p className="line"></p>
          <li className="portfolio__item">
            <a className="portfolio__link" href="https://github.com/Bumerrr/react-mesto-api-full">
              <p className="portfolio__link-text">Одностраничное приложение</p>
              <img alt="стрелка" src={strelka} />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Portfolio;