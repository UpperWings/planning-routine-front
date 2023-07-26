import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import AuthContext from './AuthContext';
import {login, createUser} from '../api/auth/authService';

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState();

  useEffect(() => {
    const userLocalStorage = localStorage.getItem('user_token');
    
    if (userLocalStorage){
      setUser(JSON.parse(userLocalStorage));
    }
  }, []);

  const signin = (username, password) => {
    return login(username, password).then((data)=> {
      setUser({...data, username});
      localStorage.setItem('user_token', JSON.stringify({...data, username}));
      return true;
    }).catch((err) => {
      console.log(err);
      return false; 
    });
  };

  const signup = (username, password) => {
    console.log('Tentou cadastrar', username, password);
    return createUser(username, password).catch((err) => {
      console.log(err);
      return err; 
    });
  };

  const signout = () => {
    setUser(null);
    localStorage.removeItem('user_token');
  };


  return (
    <AuthContext.Provider
      value={{user, signed: !!user, signin, signup, signout}}
    >
      {children}
    </AuthContext.Provider>);

};

export default AuthProvider;

AuthProvider.propTypes = {
  data: propTypes.shape({})
}.isRequired;
