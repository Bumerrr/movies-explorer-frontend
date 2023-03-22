import React from "react";
import avatar from "../../images/avatar.svg";
import "./AboutMe.css";

function AboutMe() {
    return (
        <section className="aboutMe">
            <div className="aboutMe__main">
                <h2 className="aboutMe__title-section">Студент</h2>
                <p className="line"></p>
                <div className="aboutMe__main-profile">
                    <div className="aboutMe__main-text">
                        <h3 className="aboutMe__title">Виталий</h3>
                        <p className="aboutMe__title-old">
                            Фронтенд-разработчик, 30 лет
                        </p>
                        <p className="aboutMe__subtitle">
                            Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
                            и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить.
                            С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке,
                            начал заниматься фриланс-заказами и ушёл с постоянной работы.
                        </p>
                        <a className="aboutMe__social" href="https://github.com/Bumerrr"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Github
                        </a>
                    </div>
                    <div>
                        <img className="aboutMe__avatar" alt="аватарка" src={avatar} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;