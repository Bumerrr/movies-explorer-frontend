import React from "react";
import "./MoviesCardList.css";
import MoviesForm from '../MoviesForm/MoviesForm';
import movie from '../../images/movie.svg';

function MoviesCardList({ saved }) {
  return (
    <>
      {saved ? (
        <section className="moviesgallery">
          <div className="moviesgallery__main">
            <MoviesForm
              name='Название фильма'
              time='1ч 42м'
              link={movie}
              btn={'card-movies__btn_type_delete'}
            />
            <MoviesForm
              name='Название фильма'
              time='1ч 42м'
              link={movie}
              btn={'card-movies__btn_type_delete'}
            />
            <MoviesForm
              name='Название фильма'
              time='1ч 42м'
              link={movie}
              btn={'card-movies__btn_type_delete'}
            />
          </div>
        </section>
      ) : (
        <section className="moviesgallery">
          <div className="moviesgallery__main">
            <MoviesForm
              name='Название фильма'
              time='1ч 42м'
              link={movie}
              btn={'card-movies__btn_type_saved'}
            />
            <MoviesForm
              name='Название фильма'
              time='1ч 42м'
              link={movie}
              btn={'card-movies__btn_type_saved'}
            />
            <MoviesForm
              name='Название фильма'
              time='1ч 42м'
              link={movie}
              btn={'card-movies__btn'}
            />
            <MoviesForm
              name='Название фильма'
              time='1ч 42м'
              link={movie}
              btn={'card-movies__btn'}
            />
            <MoviesForm
              name='Название фильма'
              time='1ч 42м'
              link={movie}
              btn={'card-movies__btn'}
            />
            <MoviesForm
              name='Название фильма'
              time='1ч 42м'
              link={movie}
              btn={'card-movies__btn_type_saved'}
            />
            <MoviesForm
              name='Название фильма'
              time='1ч 42м'
              link={movie}
              btn={'card-movies__btn_type_saved'}
            />
            <MoviesForm
              name='Название фильма'
              time='1ч 42м'
              link={movie}
              btn={'card-movies__btn'}
            />
            <MoviesForm
              name='Название фильма'
              time='1ч 42м'
              link={movie}
              btn={'card-movies__btn'}
            />
            <MoviesForm
              name='Название фильма'
              time='1ч 42м'
              link={movie}
              btn={'card-movies__btn'}
            />
            <MoviesForm
              name='Название фильма'
              time='1ч 42м'
              link={movie}
              btn={'card-movies__btn_type_saved'}
            />
            <MoviesForm
              name='Название фильма'
              time='1ч 42м'
              link={movie}
              btn={'card-movies__btn'}
            />
          </div>
          <div className="moviesgallery__main-button">
            <button className="moviesgallery__button-card-more">Ещё</button>
          </div>
        </section>
      )}
    </>
  );
}

export default MoviesCardList;