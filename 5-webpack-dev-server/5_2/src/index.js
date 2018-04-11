import './main.scss';

import React from 'react';
import ReactDOM from 'react-dom';

import { AppContainer } from 'react-hot-loader';

import App from './components/App';

const render = (Comp) => {
  ReactDOM.render(
    <AppContainer>
      <Comp />
    </AppContainer>,
    document.getElementById('app'),
  )
}

render(App);

if(module.hot) {
  module.hot.accept('./components/App', () => {
    render(App);
  })
}

