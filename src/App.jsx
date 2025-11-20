import { useState } from 'react';
import './App.css';
import Btn from './components/Btn';
function App() {
  return (
    <>
      <Btn type={'line'}>Shop Now</Btn>
      <Btn type={'line'} color={'white'}>
        Shop Now
      </Btn>
      <Btn type={'bg'}>Buy Now</Btn>
      <div className="scss_test">scss test</div>
    </>
  );
}

export default App;
