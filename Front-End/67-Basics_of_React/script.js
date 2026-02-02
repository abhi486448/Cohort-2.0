// console.log(React);

// var h1 = document.querySelector('h1');

// h1.innerHTML = 'Hello from JS';

// document.body.appendChild(h1);

var h1 = React.createElement('h1', null, 'Hello from React');
var h2 = React.createElement('h2',null,'THis is h2')

var div = React.createElement('div',{id:'parent'},[h1,h2])
// console.log(h1);

var container = document.querySelector('#container');

// var root = ReactDOM.createRoot(container);
var root = ReactDOM.createRoot(container)

root.render(div);