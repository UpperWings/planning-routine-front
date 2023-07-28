import React, { useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';

import * as C from './styles';
import Button from '../../components/Button';
import Input from '../../components/Input';
import useAuth from '../../hooks/UseAuth';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); 
  const navigate = useNavigate();

  const { signup } = useAuth();

  const handleSignup = async () => {
    if(!username | !password){
      setError('Preencha todos os campos');
    } 

    const res = await signup(username, password);

    if(res){
      console.log(res);
      setError(res);
      return;
    }

    navigate('/');
  };

  return (
    <C.Container>
      <C.Label>Planning Routine Cadastro</C.Label>
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
        <Button Text="Inscreva-se" onClick={handleSignup} />
        <C.LabelSignup>
          Já tem uma conta?
          <C.Strong>
            <Link to="/">&nbsp;Entre</Link>
          </C.Strong>
          
        </C.LabelSignup>
      </C.Content>
      
    </C.Container>
  );
};

export default Signup;
