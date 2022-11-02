import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../../comp/Loading';
import AxiosApi from '../../utils/AxiosApi';

const List = () => {
  const [stateLoading, setLoading] = useState()
  const [stateList, setList] = useState()

  const getList = async (fuelType, segment) => {
    setLoading(true)
    const listData = await AxiosApi(fuelType, segment);
    setList(listData.data.payload)
    console.log(listData.data.payload)
    setLoading(false)
    return listData.data;
  }

  useEffect(() => {
    getList()
  }, [])

  return (
    <React.Fragment>
      <div>
        <button onClick={() => getList()}>전체</button>
        <button onClick={() => getList('', "C")}>소형</button>
        <button onClick={() => getList('', "D")}>중형</button>
        <button onClick={() => getList('', "SUV")}>대형</button>
      </div>
      {stateLoading && <Loading />}
      {
        (!stateLoading && stateList)
        &&
        stateList.map((listData) => {
          return (
            <Link to='/detail' state={listData} key={listData.id}>
              <ul key={listData.id}>
                <li>{listData.attribute.brand}</li>
              </ul>
            </Link>
          )
        })
      }
    </React.Fragment>
  );
};

export default List;