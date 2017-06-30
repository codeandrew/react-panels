var React = require('react');
var MainPanelTitle = require('./MainPanelTitle.jsx');

let divStyle = {
  bg :{
    backgroundColor : 'red',
    height: 150
  }
}
class MainPanel extends React.Component{
  createTitle(number, text){
    return(
      <MainPanelTitle key={number + text} number={number} text={text} />
    );
  }
  render(){
    if (this.props.bgColor){
      console.log('main panel: ' + this.props.bgColor);
      divStyle.bg.backgroundColor = this.props.bgColor;
      console.log(divStyle);
    }
    return(
      <div className="panel panel-default main-panel">
        <div className="panel-body" style={divStyle.bg}>

        </div>
        <div className="panel-footer dark">
          <div className="row">
            {this.createTitle(15080, 'Shot Views')}
            {this.createTitle(12000, 'Likes')}
            {this.createTitle(5100, 'Comments')}
          </div>
        </div>
      </div>
    );
  }
}

module.exports = MainPanel;
