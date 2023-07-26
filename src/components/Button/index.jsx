import React from 'react';
import propTypes from 'prop-types';
import * as C from './styles';

const Button = ({Text, onClick, Type = 'button'}) => {
  return (
    <C.Button type={Type} onClick={onClick}>
      {Text}
    </C.Button>
  );
};

export default Button;

Button.propTypes = {
  text: propTypes.shape({}),
  onClick: propTypes.shape({}),
  Type: propTypes.shape({}),
}.isRequired;
