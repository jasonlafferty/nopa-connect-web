import React from 'react';
import ChooseBankPage from './ChooseBankPage';
import renderer from 'react-test-renderer';

test('Renders correctly', () => {
  const tree = renderer.create(
    <ChooseBankPage />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
