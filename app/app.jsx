var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');


//Load foundations
require('style!css!foundation-sites/dist/foundation.min.css');

$(document).foundation();

//App css
require('style!css!sass!applicationStyles')



// var Route = require('react-router').Route; //This line is the same as what we have above it.

// var obj = {
//   name: 'Terry'
// }
//
// var {name} = obj; This creates a var called name and sets it to whatever obj.name is equal to.

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path='about' component={About}/>
      <Route path='examples' component={Examples}/>
      <IndexRoute component={Weather}/>
    </Route>
  </Router>,
    document.getElementById('app')
)
