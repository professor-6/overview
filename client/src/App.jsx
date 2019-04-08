import React from 'react';
import ReactDOM from 'react-dom';
import Overview from './components/Overview.jsx';
import Info from './components/Info.jsx';
import Description from './components/Description.jsx';
import Photos from './components/Photos.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="mainOverview">
        <Overview />
        <Info />
        <Description />
        <Photos />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

export default App;