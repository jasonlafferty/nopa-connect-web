import React from 'react';
import HomePage from './HomePage';
import renderer from 'react-test-renderer';

test('Renders correctly', () => {
  const tree = renderer.create(
    <HomePage />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
