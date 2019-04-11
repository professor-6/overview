import React from 'react';
import ReactDOM from 'react-dom';
import Info from './components/Info.jsx';
import Description from './components/Description.jsx';
import Photos from './components/Photos.jsx'
import Navigation from './components/Navigation.jsx';
import Logo from './components/Logo.jsx';

class Overview extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="mainOverview">
        <Logo />
        <Navigation />
        <Info />
        <Description />
        <Photos />
      </div>
    )
  }
}

ReactDOM.render(<Overview />, document.getElementById('app-overview'));

export default Overview;