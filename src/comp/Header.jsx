import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const [stateHeading, setHeading] = useState(true)
  const headerLocation = useLocation()
  const nav = useNavigate()
  const goToMain = ()=>{
    nav(-1)
  }
  useEffect(()=>{
    if(headerLocation.pathname === '/'){
      setHeading(true)
    } else{
      setHeading(false)
    }
  },[headerLocation.pathname])
  return (
    <div>
      {stateHeading&&<div>전체차량</div>}
      {!stateHeading&&
      <div>
        <button onClick={goToMain}>←</button>
        차량상세
        </div> }
    </div>
  );
};

export default Header;