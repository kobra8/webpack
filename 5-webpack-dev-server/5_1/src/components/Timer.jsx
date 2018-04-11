import React from 'react';

import styles from './Timer.scss';
import CSSModules from 'react-css-modules';

const Timer = () => (
    <section styleName="timer">
        <div styleName="board">
            <span styleName="num">13</span>
            <span styleName="num">22</span>
            <span styleName="num">21</span>
        </div>
        <div styleName="logo"></div>
    </section>
);

export default CSSModules(Timer, styles, { allowMultiple: true });