import React from 'react';

class Info extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: [],
      rating: 0
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
          result.map((item) => {
            this.setState({
              rating: item.rating
            })
          })
          console.log(this.state.rating)
        },
        (error) => {
          console.log('error w client req to server', error);
        }
      );
  };

  render() {
    return (
      <div id="mainOverview">
        {this.state.restaurants.map((data) => (
          <div>
            <div id="info">
              <div id="rating">
                <span className={this.state.rating < 1 ?
                  "fa fa-star" : "fa fa-star checked"}></span>
                <span className={this.state.rating < 2 ?
                  "fa fa-star" : "fa fa-star checked"}></span>
                <span className={this.state.rating < 3 ?
                  "fa fa-star" : "fa fa-star checked"}></span>
                <span className={this.state.rating < 4 ?
                  "fa fa-star" : "fa fa-star checked"}></span>
                <span className={this.state.rating < 5 ?
                  "fa fa-star" : "fa fa-star checked"}></span>
                {data.rating}
              </div>
              <div id="numOfReviews">
                <img id="speech" src="https://static.thenounproject.com/png/229790-200.png" />
                {data.reviews}
              </div>
              <img id="dollar" src="https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/money_dollar.png" />
              <div id="price">${data.max_price} and under
            </div>
              <img id="fork" src="https://image.flaticon.com/icons/png/512/14/14222.png" />
              <div id="foodType">
                {data.food_type}
              </div>
            </div>
            <div id="tags">
              <div id="topTags">Top Tags:</div>
              <div id="tag1">{data.tag1}</div>
              <div id="tag2">{data.tag2}</div>
              <div id="tag3">{data.tag3}</div>
            </div>
          </div>
        ))}
      </div>
    )
  }
};

export default Info;