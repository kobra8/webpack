import './main.scss';

import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

const render = (Comp) => {
  ReactDOM.render(
    <Comp />,
    document.getElementById('app'),
  )
}

render(App);

if(module.hot) {
  module.hot.accept('./components/App', () => {
    render(App);
  })
}

