import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./NavTab.css";

function NavTab({ isLogined }) {
  const [isMobile, setMobile] = useState(false);
  const [gamburger, setGamburger] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", onResize);
    onResize();
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    if (gamburger) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [gamburger]);

  useEffect(() => {
    if (!isMobile) setGamburger(false);
  }, [isMobile]);

  const onResize = () => setMobile(window.outerWidth <= 768);

  return (
    <>
      {isLogined ? (
        <>
          <div
            onClick={() => setGamburger(false)}
            className={
              "gamburger-overlay" + (gamburger ? " gamburger-overlay_opened" : "")
            }
          ></div>
          <div className={"gamburger" + (gamburger ? " gamburger_show" : "")}>
            <div className="gamburger__wrapper">
              <div className="gamburger__wrapper-link">
                <Link className="gamburger__link" to="/">
                  Главная
                </Link>
                <Link className="gamburger__link" to="/movies">
                  Фильмы
                </Link>
                <Link className="gamburger__link" to="/saved-movies">
                  Сохранённые фильмы
                </Link>
              </div>
              <div className="gamburger__wrapper-link-account">
                <Link to="/profile" className="gamburger__link">
                  Аккаунт
                </Link>
              </div>
            </div>
          </div>
          {isMobile ? (
            <button
              className="gamburger__button"
              onClick={() => setGamburger((b) => !b)}
            ></button>
          ) : (
            <div className="mmm">
              <ul className="header-NavTab-logined">
                <li className="header-NavTab__li-logined">
                  <Link
                    to="/movies"
                    className="header-NavTab__link-logined"
                  >
                    Фильмы
                  </Link>
                  <Link
                    to="/saved-movies"
                    className="header-NavTab__link-logined"
                  >
                    Сохранённые фильмы
                  </Link>
                </li>
              </ul>

              <ul className="header-NavTab_type_logined">
                <li className="header-NavTab__li-logined">
                  <Link
                    to="/profile"
                    className="header-NavTab__link-logined header-NavTab__link-logined_type_account"
                  >
                    Аккаунт
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </>
      ) : (
        <ul className="header-NavTab">
          <li className="header-NavTab__li">
            <Link to="/sign-up" className="header-NavTab__link">
              Регистрация
            </Link>
          </li>

          <li className="header-NavTab__li header-NavTab__li_type_signin">
            <Link
              to="/sign-in"
              className="header-NavTab__link header-NavTab__link_type_signin"
            >
              Войти
            </Link>
          </li>
        </ul>
      )}
    </>
  );
}

export default NavTab;