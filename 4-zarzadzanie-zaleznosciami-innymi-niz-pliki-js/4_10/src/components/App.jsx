import React from 'react';
import ReactDOM from 'react-dom';

import Timer from './Timer';
import styles from './App.scss';

const App = () => (
    <div className={ styles.border }>
        <Timer />
    </div>
)

ReactDOM.render(
    <App/>,
    document.getElementById('app')
)