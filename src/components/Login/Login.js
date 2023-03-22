import React from "react";
import { withRouter, Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import "./Login.css";

function Login() {
  return (
    <div className="login">
      <form name="login" className="auth-form" noValidate>
        <div className="auth-form__header">
          <Link to="/" className="header__link-logo">
            <img className="auth-form__logo" src={logo} alt="логотип" />
          </Link>
        </div>
        <h2 className="auth-form__title"> Рады видеть!</h2>
        <label className="auth-form__label"> E-mail
          <input
            name="email"
            className="popup-form__input popup-form__input_type_auth"
            type="email"
            placeholder="email@gmail.ru"
          />
        </label>
        <span className="form-error"></span>
        <label className="auth-form__label"> Пароль
          <input
            name="password"
            className="popup-form__input popup-form__input_type_auth"
            type="password"
            placeholder="******"
          />
        </label>
        <span className="form-error"></span>
        <button type="submit" className="auth-form__btn-submit" > Войти </button>
        <p className="auth-form__link-wrapper">
          Ещё не зарегистрированы?
          <Link to="/sign-up" className="auth-form__link"> Регистрация </Link>
        </p>
      </form>
    </div>
  );
}

export default withRouter(Login);