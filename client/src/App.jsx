import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: [],
    }
  }

  componentDidMount() {
    fetch(`api/restaurants`)
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

  render() {
    return (
      <div>
        {this.state.restaurants.map((data) => (
          <div className="overview" style={{border: 'solid black'}}>
            <h1 className="name">{data.name}</h1>
            <div id="rating">{data.rating} {data.reviews} {data.max_price} {data.food_type}</div>
            <div id="reviews"></div>
            <div id="price"></div>
            <div id="foodType"></div>
            <div id="tags">{data.tag1} {data.tag2} {data.tag3}</div>
            <div id="description">{data.description}</div>
          </div>
        ))}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

export default App;