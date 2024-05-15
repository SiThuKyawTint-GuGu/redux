import React from 'react'
import { useDispatch } from 'react-redux';
import { addCount } from './redux/file/count';

const Plus = () => {
    const dispatch = useDispatch();
    const handlePlus = _ => {
        dispatch(addCount())
    }

  return (
    <>
      <button onClick={() => handlePlus()}>plus</button>
    </>
  );
};

export default Plus