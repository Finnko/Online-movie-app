import * as React from 'react';
import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import TabList from './tab-list';

Enzyme.configure({
  adapter: new Adapter(),
});

const props = {
  activeTab: `drama`,
  tabNames: [`Something`, `Something Else`],
};

describe(`Test e2e TabList component`, () => {
  const onTabClick = jest.fn();

  const tabsList = Enzyme.shallow(
      <TabList {...props} onTabClick={onTabClick}/>
  );

  const tabName = tabsList.find(`.movie-nav__link`).at(1);

  it(`Should tab be pressed correctly`, () => {
    tabName.simulate(`click`, {preventDefault: () => null});
    expect(onTabClick).toHaveBeenCalledTimes(1);
  });

  it(`Should tab info passed correctly on hover`, () => {
    tabName.simulate(`click`, {preventDefault: () => null});
    expect(onTabClick).toHaveBeenCalledWith(props.tabNames[1]);
  });
});
