
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Footer from './Footer';

storiesOf('Footer', module)
  .add('with text', () => (
    <Footer/>
  ));
