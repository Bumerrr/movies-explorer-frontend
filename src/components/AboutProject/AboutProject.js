import React from "react";
import "./AboutProject.css";

const AboutProject = () => {
  return (
    <section className="about-project">
      <div className="about-project__main">
        <h2 className="about-project__title">О проекте</h2>
        <p className="line"></p>
        <ul className="about-project__title-list">
          <li className="about-project__title-item">
            <h3 className="about-project__title">Дипломный проект включал 5 этапов</h3>
            <p className="about-project__subtitle">
              Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
            </p>
          </li>
          <li className="about-project__title-item">
            <h3 className="about-project__title">На выполнение диплома ушло 5 недель</h3>
            <p className="about-project__subtitle">
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
            </p>
          </li>
        </ul>
        <ul className="about-project__time">
          <li className="about-project__time-1">
            <h3 className="about-project__time-week-1">1 неделя</h3>
            <p className="about-project__time-opis">
              Back-end
            </p>
          </li>
          <li className="about-project__time-2">
            <h3 className="about-project__time-week-2">4 недели</h3>
            <p className="about-project__time-opis">
              Front-end
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default AboutProject;