import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../../comp/Loading';
import AxiosApi from '../../utils/AxiosApi';
import style from '../../style/list.module.css'

const List = () => {
  const [stateLoading, setLoading] = useState()
  const [stateList, setList] = useState()

  const changeSeg = (seg)=>{
    if(seg =='C'){
      return '소형';
    } else if(seg == 'D'){
      return '중형';
    } else if(seg == 'E'){
      return '대형';
    } else{
      return 'SUV';
    } 
  }

  const changeFuelType = (type)=>{
    if(type =='gasoline'){
      return '가솔린';
    } else if(type == 'ev'){
      return '전기';
    } else{
      return '하이브리드';
    } 
  }

  const getList = async (fuelType, segment) => {
    setLoading(true)
    const listData = await AxiosApi(fuelType, segment);
    setList(listData.data.payload)
    setLoading(false)
    return listData.data;
  }

  useEffect(() => {
    getList()
  }, [])

  return (
    <div>
      <div className={style.btnBox}>
        <button onClick={() => getList()}>전체</button>
        <button onClick={() => getList('', "C")}>소형</button>
        <button onClick={() => getList('', "D")}>중형</button>
        <button onClick={() => getList('', "E")}>대형</button>
        <button onClick={() => getList('', "SUV")}>SUV</button>
      </div>
      {stateLoading && <Loading />}
      {
        (!stateLoading && stateList)
        &&
        stateList.map((listData) => {
          return (
            <Link to='/detail' state={listData} key={listData.id} className={style.link}>
              <ul>
                <li>{listData.attribute.brand}</li>
                <li>{listData.attribute.name}</li>
                <li><span>{changeSeg(listData.attribute.segment)}</span>/<span>{changeFuelType(listData.attribute.fuelType)}</span></li>
                <li>월 {listData.amount/10000}만원부터</li>
              </ul>
              <figure>
                <img src={listData.attribute.imageUrl} alt="" />
              </figure>
            </Link>
          )
        })
      }
    </div>
  );
};

export default List;