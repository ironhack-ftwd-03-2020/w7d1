import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

const name = 'Dan Abramov';

// const element = <h1 className="heading">Hello {name}</h1>;

// for -> htmlfor
// class -> className 

// const element = (
//     <h1>
//         Hello User
//     </h1>
// );

// all tags have to be closed
// <br> -> <br />
// <img src="" alt=""> -> <img src="" alt=""/>

const myStyle = {
    color: 'green'
}

// styling with css
const element = (
    <div>
        <p
            style={{
                backgroundColor: 'pink'
            }}
        >
            First Paragraph
        </p>
        <p style={myStyle}>
            Second Paragraph
    </p>
    </div>
);

const greet = () => {
    return <h1>Hello World</h1>
}

// that s what happens internally
/*
const element = (
    <h1 className="greeting">
        Hello, world!
    </h1>
);
// get's compiled to this:
const element = React.createElement(
    'h1',
    { className: 'greeting' },
    'Hello, world!'
);
*/
ReactDOM.render(
    element,
    document.getElementById('root')
);