var React = require('react');
var SidePanel = require('./components/SidePanel.jsx');
var MainPanel = require('./components/MainPanel.jsx');
var Box = require('./components/Box.jsx');
var ClimateBox = require('./components/climate.jsx');
var c = require('./components/colors.jsx');

class Grid extends React.Component{
  render(){
    return(
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-9">
            <div className="row">
              <div>
                <Box number='20' text='New Followers added this month' />
                <Box number='$ 1250' text='Average Monthly income' />
                <Box number='$ 13865' text='Yearly income Goal' />
              </div>
            </div>
            <div>
              <MainPanel bgColor={c.blue} />
              <MainPanel bgColor={c.violet}/>
            </div>
          </div>
          <div className="col-sm-3">
              <ClimateBox climate='18°' text='Paris' bgColor={c.orange} />
              <SidePanel title='New Vistors' text="1.5k" headingColor={c.blue} />
              <SidePanel title='BounceRate' text='50%' headingColor={c.violet}/>
              <SidePanel title='Searchs' text='28%' headingColor={c.red}/>
              <SidePanel title='Traffic' text='140.5 kb' headingColor={c.green}/>
          </div>
        </div>
      </div>

    );
  }
}

module.exports = Grid;
