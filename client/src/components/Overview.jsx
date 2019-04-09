import React from 'react';

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: [],
    };
  };

  componentDidMount() {
    fetch(`/1`)
    .then(res => res.json())
    .then(
      (result) => {
        console.log(result)
        this.setState({
          restaurants: result
        });
      },
      (error) => {
        console.log('error w client req to server', error);
      }
    );
}

// ---- working on getting the endpoint to work ----

  // componentDidMount() {
  //   this.getData();
  // }

  // getData() {
  //   const id = parseInt(window.location.pathname.split('/').pop());
  //   const self = this;
  //   console.log(id)
  //   fetch(`/${id}`)
  //     .then(res => res.json())
  //     .then(result => this.setState({ restaurants: result }))
  //     .catch((error) => {
  //       console.log("error", error)});
  // }

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