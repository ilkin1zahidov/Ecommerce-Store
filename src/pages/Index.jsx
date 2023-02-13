import React from 'react';
import Input from '../components/input/input';
import Main from '../components/main/main';

import Basket from '../assets/img/basket.svg';


const Index = () => {
  return (
    <>
        <Input/>
        <Main
          image = {Basket}
        />
    </>
  )
}

export default Index