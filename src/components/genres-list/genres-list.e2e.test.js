import React from 'react';
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import GenresList from './genres-list.tsx';

Enzyme.configure({
  adapter: new Adapter(),
});

const props = {
  activeItem: `All genres`,
  genres: [`All genres`, `Crime`, `Horror`],
};

describe(`Test e2e GenresList component`, () => {
  const onActiveItemChange = jest.fn();
  const onGenreChange = jest.fn();

  const genresList = shallow(
      <GenresList
        {...props}
        onActiveItemChange={onActiveItemChange}
        onGenreChange={onGenreChange}/>
  );

  const genre = genresList.find(`.catalog__genres-link`).at(1);

  it(`Should tab be pressed correctly`, () => {
    genre.simulate(`click`, {preventDefault: () => {}});
    expect(onActiveItemChange).toHaveBeenCalledTimes(1);
  });

  it(`Should tab info passed correctly on click`, () => {
    genre.simulate(`click`, {preventDefault: () => {}});
    expect(onActiveItemChange).toHaveBeenCalledWith(props.genres[1]);
    expect(onGenreChange).toHaveBeenCalledWith(props.genres[1]);
  });
});
