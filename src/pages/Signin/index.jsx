import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import * as C from './styles';
import Button from '../../components/Button';
import Input from '../../components/Input';
import useAuth from '../../hooks/UseAuth';

const Signin = () => {
  const {signin } = useAuth();
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); 

  const handleLogin = async () => {
    if(!username | ! password) {
      setError('Preencha todos os campos');
      return;
    }

    const res = await signin(username, password);

    if(!res){
      setError('Usuario ou senha invalido');
      return;
    }

    navigate('/home');
  };

  return (
    <C.Container>
      <C.Label>Planning Routine Login</C.Label>
      <C.Content>
        <Input 
          type="email"
          placeholder="Digite seu E-mail"
          value={username}
          onChange={(e) => [setUsername(e.target.value), setError('')]}
        />
        <Input 
          type="password"
          placeholder="Digite sua Senha"
          value={password}
          onChange={(e) => [setPassword(e.target.value), setError('')]}
        />
        <C.labelError>{error}</C.labelError>
        <Button Text="Entrar" onClick={handleLogin} />
        <C.LabelSignup>
          Não tem uma conta?
          <C.Strong>
            <Link to="/signup">&nbsp;Registre-se</Link>
          </C.Strong>
          
        </C.LabelSignup>
      </C.Content>
      
    </C.Container>
  );
};

export default Signin;
