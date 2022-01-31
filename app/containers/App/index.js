/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch } from 'react-router-dom';
import Routes from '../../routes/routes';
import GlobalStyle from '../../global-styles';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  return (
    <div>
            <ToastContainer />

      <Switch>
        <Routes />
      
      </Switch>
      <GlobalStyle />
    </div>
  );
}
