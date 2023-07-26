import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import useAuth from '../../hooks/UseAuth';
import * as C from './styles';

const Home = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();



  return (
    <C.Container>
      <C.Title>Planning Routine</C.Title>
      <Button Text="Sair" onClick={() => [signout(), navigate('/')]}/>
      <Button Text="Ver a Lojinha!!" onClick={() => navigate('/shoping')}/>
    </C.Container>
  );
};

export default Home;
