import React from 'react';

import Timer from './Timer';

import styles from './App.scss';
import CSSModules from 'react-css-modules';

const App = () => (
    <div styleName="app">
        <Timer />
    </div>
)

export default CSSModules(App, styles);