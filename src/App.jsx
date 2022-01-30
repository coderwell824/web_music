import React, { memo} from 'react';

import {renderRoutes} from "react-router-config"
import routes from './router';
import {BrowserRouter} from "react-router-dom"

import AppHeader from '@/components/appHeader';
import AppFooter from '@/components/appFooter';

export default memo(function App() {
  return (
    <BrowserRouter>
      <AppHeader/>
      {renderRoutes(routes)}
      <AppFooter/>
    </BrowserRouter>
  );
});
