// import { Button } from '@storybook/react/demo';
import { storiesOf } from '@storybook/react';
import React from 'react';
import DefaultCombo from './component/default-combo';
import RegisterCombo from './component/register-combo';

export default { title: 'Combo' };

storiesOf('Combo', module)
  .add('default combo', () => (
    <DefaultCombo />
  ))
  .add('register combo', () => (
    <RegisterCombo />
  ));