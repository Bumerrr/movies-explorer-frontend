import React from "react";
import "./MoviesCardList.css";
import MoviesForm from '../MoviesForm/MoviesForm';
import one from '../../images/1.png';
import two from '../../images/2.png';
import three from '../../images/3.png';
import four from '../../images/4.png';
import five from '../../images/5.png';
import six from '../../images/6.png';
import seven from '../../images/1.png';
import eight from '../../images/2.png';
import nine from '../../images/3.png';
import ten from '../../images/4.png';
import eleven from '../../images/5.png';
import twelwe from '../../images/6.png';

function MoviesCardList({ saved }) {
  return (
    <>
      {saved ? (
        <section className="moviesgallery">
          <div className="moviesgallery__main">
            <MoviesForm
              name='Название фильма'
              time='1ч 42м'
              link={one}
              btn={'card-movies__btn_type_delete'}
            />
            <MoviesForm
              name='Название фильма'
              time='1ч 42м'
              link={one}
              btn={'card-movies__btn_type_delete'}
            />
            <MoviesForm
              name='Название фильма'
              time='1ч 42м'
              link={one}
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
              link={one}
              btn={'card-movies__btn_type_saved'}
            />
            <MoviesForm
              name='Название фильма'
              time='1ч 42м'
              link={two}
              btn={'card-movies__btn_type_saved'}
            />
            <MoviesForm
              name='Название фильма'
              time='1ч 42м'
              link={three}
              btn={'card-movies__btn'}
            />
            <MoviesForm
              name='Название фильма'
              time='1ч 42м'
              link={four}
              btn={'card-movies__btn'}
            />
            <MoviesForm
              name='Название фильма'
              time='1ч 42м'
              link={five}
              btn={'card-movies__btn'}
            />
            <MoviesForm
              name='Название фильма'
              time='1ч 42м'
              link={six}
              btn={'card-movies__btn_type_saved'}
            />
            <MoviesForm
              name='Название фильма'
              time='1ч 42м'
              link={seven}
              btn={'card-movies__btn_type_saved'}
            />
            <MoviesForm
              name='Название фильма'
              time='1ч 42м'
              link={eight}
              btn={'card-movies__btn'}
            />
            <MoviesForm
              name='Название фильма'
              time='1ч 42м'
              link={nine}
              btn={'card-movies__btn'}
            />
            <MoviesForm
              name='Название фильма'
              time='1ч 42м'
              link={ten}
              btn={'card-movies__btn'}
            />
            <MoviesForm
              name='Название фильма'
              time='1ч 42м'
              link={eleven}
              btn={'card-movies__btn_type_saved'}
            />
            <MoviesForm
              name='Название фильма'
              time='1ч 42м'
              link={twelwe}
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