import React from 'react';
import StatementPage from './StatementPage';
import renderer from 'react-test-renderer';

test('Renders correctly', () => {
  const tree = renderer.create(
    <StatementPage />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
