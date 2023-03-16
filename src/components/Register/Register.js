import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import "./Register.css";

function Register() {
  return (
    <div className="register">
      <form name="login" className="auth-form">
        <div className="auth-form__header">
          <Link to="/" className="header__link-logo">
            <img className="auth-form__logo" src={logo} alt="логотип" />
          </Link>
        </div>
        <h2 className="auth-form__title">Добро пожаловать!</h2>
        <label className="auth-form__label"> Имя
          <input
            name="name"
            className="popup-form__input popup-form__input_type_auth"
            type="text"
            placeholder="Виталий"
          />
        </label>
        <label className="auth-form__label"> E-mail
          <input
            name="email"
            className="popup-form__input popup-form__input_type_auth"
            type="email"
            placeholder="pochta@yandex.ru"
          />
        </label>
        <span className="form-error"></span>
        <label className="auth-form__label">Пароль
          <input
            name="password"
            className="popup-form__input popup-form__input_type_auth popup-form__input_type_auth-error"
            type="password"
            placeholder="12345678Qwerty"
          />
        </label>
        <span className="form-error">Что-то пошло не так...</span>
        <span className="form-error"></span>
        <button type="submit" className="auth-form__btn-submit"> Зарегистрироваться </button>
        <p className="auth-form__link-wrapper">
          Уже зарегистрированы?
          <Link to="/sign-in" className="auth-form__link"> Войти
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Register;