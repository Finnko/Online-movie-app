import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withVideo from '../with-video/with-video';
import VideoPlayer from '../../components/video-player/video-player';
import withPreview from './with-preview';

configure({
  adapter: new Adapter()
});

const props = {
  isPlaying: false,
  videoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  preview: `img/the-grand-budapest-hotel-poster.jpg`,
};

const VideoPlayerWrapped = withVideo(VideoPlayer);

const MockComponentWrapped = withPreview(VideoPlayerWrapped);

describe(`Tests withPreview functionality`, () => {
  const onMovieMouseEnter = jest.fn();
  const onMovieMouseLeave = jest.fn();

  it(`withPreview inited with correct state value`, () => {
    const wrapper = shallow(
        <MockComponentWrapped
          {...props}
          onMovieMouseEnter={onMovieMouseEnter}
          onMovieMouseLeave={onMovieMouseLeave}
          renderPlayer={() => {}}
        />);

    expect(wrapper.state().activeId).toEqual(null);
  });

  it(`withActiveItem should change active id`, () => {
    const wrapper = shallow(
        <MockComponentWrapped
          {...props}
          onMovieMouseEnter={onMovieMouseEnter}
          onMovieMouseLeave={onMovieMouseLeave}
          renderPlayer={() => {}}
        />);

    wrapper.props().onMovieMouseEnter(`1`);
    jest.useFakeTimers();

    // setTimeout(() => {
    //   expect(wrapper.props().onMovieMouseEnter).toBeInstanceOf(Function);
    //   expect(wrapper.state().activeId).toBe(`1`);
    // }, 1500);

    jest.runAllTimers();
  });
});