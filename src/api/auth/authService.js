/* eslint-disable no-undef */
const login = (username, password) => {
  const host = process.env.REACT_APP_HOST;
  const path = '/login';
  const url = host + path;
  const body = {
    username: username,
    password: password
  };
  const config = {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {'Content-Type': 'application/json'}
  };
  
  const data = send(url, config);
  

  return data;
};

const createUser = async (username, password) => {
  const host = process.env.REACT_APP_HOST;
  const path = '/login';
  const url = host + path;
  const body = {
    username: username,
    password: password
  };
  const config = {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {'Content-Type': 'application/json'}
  };
  
  const response = await fetch(url, config);
  
  if(!response.ok){
    console.log('hop');
    return await response.text();
  }
    
};

const send = async (url, config) => {
  const response = await fetch(url, config);
  
  if(!response.ok)
    throw new Error('Erro no login');

  return await response.json().catch((error) => {
    throw new Error('Erro no login: ' + error);
  });
};


export {login, createUser};
