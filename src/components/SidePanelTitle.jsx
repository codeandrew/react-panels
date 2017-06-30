var React = require('react');

class SidePanelTitle extends React.Component{

    render(){
      return (
        <div>
          <p>{this.props.title}</p>
          <h3>{this.props.text}</h3>
        </div>
      )
    }
  }



module.exports = SidePanelTitle;
