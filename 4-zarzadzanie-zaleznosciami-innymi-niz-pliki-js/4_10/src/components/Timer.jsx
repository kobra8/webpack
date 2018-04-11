import React from 'react';

import styles from './Timer.scss';
import CSSModules from 'react-css-modules';

const Timer = () => (
    <div styleName="border" className="myGlobal">
        <span>13</span>:
        <span>21</span>:
        <span>12</span>
    </div>
);

export default CSSModules(Timer, styles, {allowMultiple: true});