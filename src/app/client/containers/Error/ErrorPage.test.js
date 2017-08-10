import React from 'react';
import ErrorPage from './ErrorPage';
import renderer from 'react-test-renderer';

test('Renders correctly', () => {
  const tree = renderer.create(
    <ErrorPage route={{ error: '404' }} />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
