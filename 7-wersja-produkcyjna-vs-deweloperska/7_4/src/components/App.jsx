import React from 'react';

//import Timer from './Timer';

import styles from './App.scss';
import CSSModules from 'react-css-modules';

class App extends React.Component {
    state = {
        counter: 0,
        date: new Date(),
        Timer: null,
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

    handleClick = () => {
        import('./Timer.jsx').then(module => {
            this.setState({
                Timer: module.default,
            })
        });
    }

    render() {
        
        return (
            <div styleName="app" rel="dd">
                { !this.state.Timer ?
                    <button onClick={this.handleClick}>show timer</button> :
                    <this.state.Timer 
                        h={ this.state.date.getHours()} 
                        m={ this.state.date.getMinutes()} 
                        s={ this.state.date.getSeconds()} 
                    />
                }
            </div>
        )
    }
}

export default CSSModules(App, styles);