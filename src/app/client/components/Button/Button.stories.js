
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from './Button';

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Button</Button>
  ))
  .add('with to={}', () => (
    <Button to="/index" onClick={action('clicked')}>Link to Index</Button>
  ));
