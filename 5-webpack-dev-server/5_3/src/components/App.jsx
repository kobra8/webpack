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
                <Timer 
                    h={ 2} 
                    m={ 2} 
                    s={ 2} 
                />
                <Timer 
                    h={ 1 } 
                    m={ 1 } 
                    s={ 1 } 
                />
                <a href="https://google.pl">GOOGLE</a>
            </div>
        )
    }
}

export default CSSModules(App, styles);