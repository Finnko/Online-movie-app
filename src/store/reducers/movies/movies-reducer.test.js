import {actionTypes} from '../../action-types';
import moviesReducer from './movies-reducer';

const initialState = {
  error: false,
  loading: false,
  movies: [],
  promo: {},
  reviews: [],
};

const mockPromo = {
  title: ``,
  genre: `Comedy`,
  releaseYear: 2014,
  backgroundImage: `img/bg-the-grand-budapest-hotel.jpg`,
  poster: `img/the-grand-budapest-hotel-poster.jpg`,
};

const mockMovies = [
  {
    id: `1`,
    title: `The Grand Budapest Hotel`,
    genre: `Drama`,
    releaseYear: 2014,
    backgroundImage: `img/bg-the-grand-budapest-hotel.jpg`,
    description: [
      `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
      `Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`
    ],
    director: `Michael Bay`,
    actors: [`Leonardo Di Caprio`],
    rating: 7.5,
    ratingCount: 250,
    poster: `/img/the-grand-budapest-hotel-poster.jpg`,
  }
];

describe(`Data reducer works correctly`, () => {
  it(`Data reducer without additional parameters should return initial state`, () => {
    expect(moviesReducer(void 0, {})).toEqual(initialState);
  });

  it(`Data reducer should change loading value when the request is sent`, () => {
    expect(moviesReducer(initialState, {
      type: actionTypes.FETCH_MOVIES_DATA_REQUEST,
    })).toEqual({
      error: false,
      loading: true,
      movies: [],
      promo: {},
    });
  });

  it(`Data reducer should change loading and error value when the error is occurred`, () => {
    expect(moviesReducer(initialState, {
      type: actionTypes.FETCH_MOVIES_DATA_ERROR,
    })).toEqual({
      error: true,
      loading: false,
      movies: [],
      promo: {},
    });
  });

  it(`Data reducer should change data on success`, () => {
    expect(moviesReducer(initialState, {
      type: actionTypes.FETCH_MOVIES_DATA_SUCCESS,
      payload: {
        movies: mockMovies,
        promo: mockPromo,
      }
    })).toEqual({
      error: false,
      loading: false,
      movies: mockMovies,
      promo: mockPromo,
    });
  });

});