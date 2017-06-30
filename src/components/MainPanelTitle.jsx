var React = require('react');

class MainPanelTitle extends React.Component{
  render(){
    return (
      <div className="col-xs-4">
        <h3>{this.props.number}</h3>
        <p>{this.props.text}</p>
      </div>
    );
  }
}

module.exports = MainPanelTitle;
