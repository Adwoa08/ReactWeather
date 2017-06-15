var React = require('react');
var {Link} = require('react-router');
//Note that we dont use the props but it has to be there as the only argument
var Examples = (props) => {
  return(
    <div>
      <h1 className="text-center page-title">Examples</h1>
      <p>Here are a few example locations to try out:</p>
      <ol>
        <li>
          <Link to='/?location=Kailua'>Kailua, HI</Link>
        </li>
        <li>
          <Link to='/?location=Philadelphia'>Philadelphia, PA</Link>
        </li>
        <li>
          <Link to='/?location=Rio de Janeiro'>Rio de Janeiro, Brazil</Link>
        </li>
      </ol>
    </div>

  )
};

module.exports = Examples;
