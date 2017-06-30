const React = require('react');

class Text extends React.Component{
  render(){
    return (
      <div className="climate">
        <h3>{this.props.climate}</h3>
        <p> {this.props.text} </p>
      </div>
    );
  }
}

let divStyle = {
  bg : {}
}
class ClimateBox extends React.Component {
  createText(climate, text){
    return(
      <Text key={climate + text} climate={climate} text={text} />
    );
  }
  render(){
    if(this.props.bgColor){
      divStyle.bg.backgroundColor = this.props.bgColor
    }

    return (
      <div style={divStyle.bg} className="panel panel-default">
        <div className="panel-body">
          {this.createText(this.props.climate, this.props.text)}
        </div>
      </div>
    );
  }
}

module.exports = ClimateBox;
