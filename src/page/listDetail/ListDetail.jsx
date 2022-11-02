import React from 'react';
import { useLocation } from 'react-router-dom';
import style from '../../style/listDetail.module.css'

const ListDetail = () => {
  const detailLocation = useLocation()
  const detailAttribute = detailLocation.state.attribute
  console.log(detailAttribute)
  console.log(detailLocation.state)
  // console.log(detailAttribute.imageUrl)
  return (
    <div>
      <ul className={style.detail}>
        <li>
          <img src={`${detailAttribute.imageUrl}`} alt="" />
        </li>
        <li>{detailAttribute.brand}</li>
        <li>{detailAttribute.name}</li>
        <li>월 {detailLocation.state.amount/10000}만원</li>
      </ul>
      <details className={style.toggle}> 
        <summary>차량정보</summary>
        <ul>
          <li><span>차종</span><span>{detailAttribute.segment}</span></li>
          <li><span>연료</span><span>{detailAttribute.fuelType}</span></li>
          <li><span>이용 가능일</span><span>{detailLocation.state.startDate}</span></li>
        </ul>
      </details>
      <details className={style.toggle}>
        <summary>보험</summary>
        <ul>
          <li>
            <span>{detailLocation.state.insurance[0].name}</span><span>{detailLocation.state.insurance[0].description}</span>
          </li>
          <li>
            <span>{detailLocation.state.insurance[1].name}</span><span>{detailLocation.state.insurance[1].description}</span>
          </li>
        </ul>
      </details>
      {
        detailLocation.state.additionalProducts.length > 0 &&
      <details className={style.toggle}>
        <summary>추가상품</summary>
        <ul>
          <li>
            <span>{detailLocation.state.additionalProducts[0].name}</span><span>월 {detailLocation.state.additionalProducts[0].amount/10000}만원</span>
          </li>
        </ul>
      </details>
      }
    </div>
  );
};

export default ListDetail;