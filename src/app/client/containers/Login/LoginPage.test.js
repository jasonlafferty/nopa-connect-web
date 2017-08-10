import React from 'react';
import LoginPage from './LoginPage';
import renderer from 'react-test-renderer';

test('Renders correctly', () => {
  const tree = renderer.create(
    <LoginPage />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
