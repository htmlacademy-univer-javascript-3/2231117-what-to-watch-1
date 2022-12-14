import {useState} from 'react';
import FilmCard from '../filmCard/film-card';
import type {Film} from '../../types/film';

type Props = {
  films: Film[];
}

function FilmList({films}: Props): JSX.Element {
  const [, setActive] = useState({});

  const handleFilmOnHover = (film: Film) => {
    setActive(film);
  };

  return (
    <div className="catalog__films-list">
      {films.map((film) => <FilmCard key={film.id} film={film} onHover={handleFilmOnHover}/>)}
    </div>
  );
}

export default FilmList;
