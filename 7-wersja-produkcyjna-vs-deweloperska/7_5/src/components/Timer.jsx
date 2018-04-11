import React from 'react';

import styles from './Timer.scss';
import CSSModules from 'react-css-modules';

const Timer = (props) => (
    <section styleName="timer">
        <div styleName="board" title="test">
            <span styleName="num">{props.h}</span>
            <span styleName="num">{props.m}</span>
            <span styleName="num">{props.s}</span>
        </div>
        <div styleName="logo"></div>
    </section>
);

export default CSSModules(Timer, styles, { allowMultiple: true });