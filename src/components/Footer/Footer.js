import React from "react";
import "./Footer.css";

function Footer () {
    return (
        <footer>
        <section className="footer">
            <div className="footer__all-main">
                <p className="footer__main-text">
                    Учебный проект Яндекс.Практикум х BeatFilm.
                </p>
                <p className="line"></p>
                <div className="footer__main">
                    <p className="footer__copyright-text">© 2023</p>
                    <ul className="footer__link">
                        <li className="footer__link-item">
                            <a className="footer__link-text" href="https://praktikum.yandex.ru"
                            target="_blank"
                            rel="noreferrer"
                            > Яндекс.Практикум </a>
                        </li>
                        <li className="footer__link-item">
                            <a className="footer__link-text" href="https://github.com/Bumerrr"
                            target="_blank"
                            rel="noreferrer"
                            > Github </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
        </footer>
    );
};

export default Footer;