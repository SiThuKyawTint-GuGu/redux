import React from 'react'
import { useDispatch } from 'react-redux';
import { minusCount } from './redux/file/count';

const Minus = () => {
    const dispatch = useDispatch();
    const handleMinus = _ => {
        dispatch(minusCount());
    }
  return (
    <>
      <button onClick={() => handleMinus()}>minus</button>
    </>
  );
};

export default Minus