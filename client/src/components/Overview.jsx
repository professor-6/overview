import React from 'react';

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: [],
    };
  };

  componentDidMount() {
      fetch(`api/restaurants/1`)
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
      );
}


  render() {
    return (
      <div className="overview">
        <div id="nav-bar">
          <div id="overview">Overview</div>
          <div id="photos">Photos</div>
          <div id="menu">Menu</div>
          <div id="reviews">Reviews</div>
        </div>
        {this.state.restaurants.map((data) => (
        <h1 className="name">{data.name}</h1>
        ))}
      </div>
    );
  };
};

export default Overview;