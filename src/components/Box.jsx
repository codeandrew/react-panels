var React = require('react');
var BoxTitle = require('./BoxTitle.jsx');

class Box extends React.Component{
  createTitle(number, text){
    return(
      <BoxTitle key={number + text} number={number} text={text} />
    );
  }

  render(){
    return (
      <div className="col-sm-4">
        <div className="panel panel-default box">
          {this.createTitle(this.props.number, this.props.text)}
        </div>
      </div>
    );
  }
}

module.exports = Box;
