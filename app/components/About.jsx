var React = require('react');



// var About = React.createClass({
//
//   render: function(){
//     return(
//       <h3>About component</h3>
//     )
//   }
// })

var About = (props) => {
  return(
    <div>
      <h2>About</h2>
      <p>Welcome to the about page!</p>
    </div>
  )
};

module.exports = About;
