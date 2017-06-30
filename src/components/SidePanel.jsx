var React = require('react');
var SidePanelTitle = require('./SidePanelTitle.jsx');

//This is Another way to create a Component
//React.createClass but it will be deprecated in the future
//so better use es6 class

 const SidePanel = React.createClass({
   CreateText:  function(title, text) {
     return(
       <SidePanelTitle key={title + text} title={title} text={text} />
     );
   },

   render: function() {
     const divStyle = {
       headColor :{

       },
       pad : {padding: 20}
     }
     if (this.props.headingColor) {
       divStyle.headColor.backgroundColor = this.props.headingColor;
      divStyle.headColor.borderColor = this.props.headingColor;
       console.log('detects props ' + this.props.headingColor)
     }


     return(
       <div className="panel panel-default side-panel">
         <div className="panel-heading" style={divStyle.headColor}>
           {this.CreateText(this.props.title, this.props.text) }
         </div>
         <div style={divStyle.pad} className="panel-body">
         </div>
       </div>
     );
   }

 });

module.exports = SidePanel;
