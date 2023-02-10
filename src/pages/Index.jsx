import React from 'react';
import Input from '../components/input';
import Main from '../components/main';

import Card_one from '../assets/img/card-1.svg';
import Card_two from '../assets/img/card-2.svg';
import Card_three from '../assets/img/card-3.svg';
import Card_four from '../assets/img/card-4.svg';
import Card_five from '../assets/img/card-5.svg';
import Card_six from '../assets/img/card-6.svg';
import Card_seven from '../assets/img/card-7.svg';
import Card_eight from '../assets/img/card-8.svg';
import Card_nine from '../assets/img/card-9.svg';
import Card_ten from '../assets/img/card-10.svg';
import Card_eleven from '../assets/img/card-11.svg';
import Card_twelve from '../assets/img/card-12.svg';
import Card_thirteen from '../assets/img/card-13.svg';
import Card_fourtheen from '../assets/img/card-14.svg';
import Card_fiftheeen from '../assets/img/card-15.svg';
import Card_sixtheen from '../assets/img/card16.svg';
import Basket from '../assets/img/basket.svg';
const cardImg = {
  Card_one,
  Card_two,
  Card_three,
  Card_four,
  Card_five,
  Card_six,
  Card_seven,
  Card_eight,
  Card_nine,
  Card_ten,
  Card_eleven,
  Card_twelve,
  Card_thirteen,
  Card_fourtheen,
  Card_fiftheeen,
  Card_sixtheen,
  Basket
}

const Index = () => {
  return (
    <>
        <Input/>
        <Main
          image = {cardImg}
        />
    </>
  )
}

export default Index