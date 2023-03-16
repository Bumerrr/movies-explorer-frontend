import React from "react";
import "./MoviesForm.css";

function SearchForm(props) {
    return (
        <ul className="moviesgallery__main">
            <li className="card-movies">
                <div className="card-movies__main-title">
                    <h2 className="card-movies__title">{props.name}</h2>
                    <span className="card-movies__time">{props.time}</span>
                </div>
                <img src={props.link} alt="btn-save" className="card-movies__image" />
                <button className={`usual ${props.btn}`}>Сохранить</button>
            </li>
        </ul>
    );
}

export default SearchForm;