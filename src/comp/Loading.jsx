import React from 'react';
import PulseLoader from 'react-spinners/PulseLoader'
import style from '../style/loading.module.css'

const Loading = () => {
  return (
    <PulseLoader
      className={style.load}
      color="#0094FF"
      margin={7}
      size={30}
      speedMultiplier={1}
    />
  );
};

export default Loading;