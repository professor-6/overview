import React from 'react';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state({
      restaurants: [],
    })
  }

  componentDidMount() {
    fetch("/api/restaurants/")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            restaurants: result
          });
        },
        (error) => {
          console.log('error w client req to server', error);
        }
      )
  };

  return() {
    render(
      <div>
        {this.state.restaurants.map((data) => (
          <div>{data}</div>
        ))}
      </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('app'));