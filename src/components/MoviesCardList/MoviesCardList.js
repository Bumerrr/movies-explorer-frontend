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
          <ul className="moviesgallery__main">
            <MoviesForm
              name='Название фильма'
              time='1ч 42м'
              link={one}
              btn={'delete'}
            />
            <MoviesForm
              name='Название фильма'
              time='1ч 42м'
              link={one}
              btn={'delete'}
            />
            <MoviesForm
              name='Название фильма'
              time='1ч 42м'
              link={one}
              btn={'delete'}
            />
          </ul>
        </section>
      ) : (
        <section className="moviesgallery">
          <ul className="moviesgallery__main">
            <MoviesForm
              name='Название фильма'
              time='1ч 42м'
              link={one}
              btn={'saved'}
            />
            <MoviesForm
              name='Название фильма'
              time='1ч 42м'
              link={two}
              btn={'saved'}
            />
            <MoviesForm
              name='Название фильма'
              time='1ч 42м'
              link={three}
              btn={'usual'}
            />
            <MoviesForm
              name='Название фильма'
              time='1ч 42м'
              link={four}
              btn={'usual'}
            />
            <MoviesForm
              name='Название фильма'
              time='1ч 42м'
              link={five}
              btn={'usual'}
            />
            <MoviesForm
              name='Название фильма'
              time='1ч 42м'
              link={six}
              btn={'saved'}
            />
            <MoviesForm
              name='Название фильма'
              time='1ч 42м'
              link={seven}
              btn={'saved'}
            />
            <MoviesForm
              name='Название фильма'
              time='1ч 42м'
              link={eight}
              btn={'usual'}
            />
            <MoviesForm
              name='Название фильма'
              time='1ч 42м'
              link={nine}
              btn={'usual'}
            />
            <MoviesForm
              name='Название фильма'
              time='1ч 42м'
              link={ten}
              btn={'usual'}
            />
            <MoviesForm
              name='Название фильма'
              time='1ч 42м'
              link={eleven}
              btn={'saved'}
            />
            <MoviesForm
              name='Название фильма'
              time='1ч 42м'
              link={twelwe}
              btn={'usual'}
            />
          </ul>
          <div className="moviesgallery__main-button">
            <button className="moviesgallery__button-card-more">Ещё</button>
          </div>
        </section>
      )}
    </>
  );
}

export default MoviesCardList;