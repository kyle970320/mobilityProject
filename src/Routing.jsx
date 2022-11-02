import React from 'react';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './comp/Header';
import List from './page/list/List';
import ListDetail from './page/listDetail/ListDetail';
import AxiosApi from './utils/AxiosApi';

const Routing = () => {

  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route path='/' element={<List />} />
        <Route path='/detail' element={<ListDetail />} />
      </Routes>
    </React.Fragment>
  );
};

export default Routing;