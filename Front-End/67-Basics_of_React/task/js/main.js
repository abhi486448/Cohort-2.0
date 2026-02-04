import Nav from './Nav.js'
import Hero from './Hero.js'

var container = document.querySelector('.root');
const root = ReactDOM.createRoot(container);

var body = React.createElement('div',null,[Nav(),Hero()]);

root.render(body);