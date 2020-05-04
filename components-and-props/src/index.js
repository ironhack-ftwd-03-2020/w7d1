import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import App from './App';

/*
class App extends React.Component {
    render() {
        return (
            <div>
                <Greeting name="Alice" />
                <Greeting name="Bob" />
            </div>
        )
    }
}
*/
// class component
/*
class Greeting extends React.Component {
    render() {
        console.log(this.props);
        return (
            <h1>Hello {this.props.name}</h1>
        )
    }
}
*/

// functional component
/*
const Greeting = (props) => {
    console.log(props);
    return <h1>Hello {props.name}</h1>
}
*/

ReactDOM.render(
    <App />,
    document.getElementById('root')
);