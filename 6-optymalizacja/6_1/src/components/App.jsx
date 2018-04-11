import React from 'react';

import Timer from './Timer';

import styles from './App.scss';
import CSSModules from 'react-css-modules';

class App extends React.Component {
    state = {
        counter: 0,
        date: new Date(),
    }

    componentDidMount() {
        this.id = setInterval(() => {
            this.setState({
                counter: this.state.counter +1,
                date: new Date(),
            })
        }, 1000);
    }

    componentWillMount() {
        clearInterval(this.id);
    }

    render() {
        
        return (
            <div styleName="app">
                <Timer 
                    h={ this.state.date.getHours()} 
                    m={ this.state.date.getMinutes()} 
                    s={ this.state.date.getSeconds()} 
                />
            </div>
        )
    }
}

export default CSSModules(App, styles);