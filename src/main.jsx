var React = require('react');
var ReactDOM = require('react-dom');
var List = require('./components/List.jsx');

class Hello extends React.Component{
  render(){
    return (
      <h1 id="heading-text">{this.props.text}</h1>
    );
  }
}
ReactDOM.render(
  <Hello text='Hello World' />,
  document.getElementById('hello')
);

ReactDOM.render(
  <List />,
  document.getElementById('ingredients')
);
