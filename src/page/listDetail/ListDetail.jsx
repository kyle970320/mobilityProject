import React from 'react';
import { useLocation } from 'react-router-dom';

const ListDetail = () => {
  const detailLocation = useLocation()
  const detailAttribute = detailLocation.state.attribute
  console.log(detailAttribute)
  console.log(detailLocation.state)
  // console.log(detailAttribute.imageUrl)
  return (
    <div>
      <ul>
        <li>
          <img src={`${detailAttribute.imageUrl}`} alt="" />
        </li>
        <li>{detailAttribute.brand}</li>
        <li>{detailAttribute.name}</li>
      </ul>
      <details>
        <summary>차량정보</summary>
        <ul>
          <li><span>차종</span><span>{detailAttribute.segment}</span></li>
          <li><span>연료</span><span>{detailAttribute.fuelType}</span></li>
          <li><span>이용 가능일</span><span>{detailLocation.state.startDate}</span></li>
        </ul>
      </details>
      <details>
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
      <details>
        <summary>추가상품</summary>
        <ul>
          <li>
            <span>{detailLocation.state.additionalProducts[0].name}</span><span>월 {detailLocation.state.additionalProducts[0].amount}원</span>
          </li>
        </ul>
      </details>
      }
    </div>
  );
};

export default ListDetail;