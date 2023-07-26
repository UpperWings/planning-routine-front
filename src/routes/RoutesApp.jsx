import React from 'react';
import propTypes from 'prop-types';
import { Fragment } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Signin from '../pages/Signin';
import Signup from '../pages/Signup';
import Shoping from '../pages/Shoping/Shoping';
import useAuth from '../hooks/UseAuth';

const Private = ({ Item }) => {
  const {signed} = useAuth();
  
  return signed ? <Item /> : <Signin />;
};

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route exact path="/home" element={<Private Item={Home}/>} />
          <Route exact path="/shoping" element={<Private Item={Shoping}/>} />
          <Route path="/" element={<Signin />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route path="*" element={<Signin />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
};

export default RoutesApp;

Private.propTypes = {
  children: propTypes.any,
}.isRequired;
