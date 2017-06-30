var React = require('react');

class BoxTitle extends React.Component{
  render() {
    return (
      <div>
        <h3>{this.props.number}</h3>
        <p>{this.props.text}</p>
      </div>
    );
  }
}

module.exports = BoxTitle;
