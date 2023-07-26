import React from 'react';
import propTypes from 'prop-types';
import * as C from './styles';

const Input = ({type, placeholder, value, onChange}) => {
  return <C.Input
    value={value}
    onChange={onChange}
    type={type}
    placeholder={placeholder}
  />;
};

export default Input;

Input.propTypes = {
  type: propTypes.shape({}),
  placeholder: propTypes.shape({}),
  value: propTypes.shape({}),
  onChange: propTypes.shape({})
}.isRequired;
