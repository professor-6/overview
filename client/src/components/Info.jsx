import React from 'react';
import styles from './info.css';

class Info extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: [],
      rating: 0,
      urlID: window.location.pathname.slice(1)
    };
  };

  componentDidMount() {
    fetch(`/restaurants/${this.state.urlID}` || `/restaurants/1`)
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
        },
        (error) => {
          console.log('error w client req to server', error);
        }
      );
  };

  render() {
    const star = {
      color: '#da3743'
    };
    return (
      <div className="mainOverview">
        {this.state.restaurants.map((data) => (
          <div>
            <div className={styles.info}>
              <div className="rating">
              {this.state.rating < 1 ?
                <span className="fa fa-star"/> :
                <span className="fa fa-star checked" style={star}/>}
              {this.state.rating < 2 ?
                <span className="fa fa-star"/> :
                <span className="fa fa-star checked" style={star}/>}
              {this.state.rating < 3 ?
                <span className="fa fa-star"/> :
                <span className="fa fa-star checked" style={star}/>}
              {this.state.rating < 4 ?
                <span className="fa fa-star"/> :
                <span className="fa fa-star checked" style={star}/>}
              {this.state.rating < 5 ?
                <span className="fa fa-star"/> :
                <span className="fa fa-star checked" style={star}/>}
                {data.rating}
              </div>
              <div className={styles.numOfReviews}>
                <img className={styles.speech} src="https://static.thenounproject.com/png/229790-200.png" />
                {data.reviews}
              </div>
              <img className={styles.dollar} src="https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/money_dollar.png" />
              <div className="price">${data.max_price} and under
            </div>
              <img className={styles.fork} src="https://image.flaticon.com/icons/png/512/14/14222.png" />
              <div className="foodType">
                {data.food_type}
              </div>
            </div>
            <div className={styles.tags}>
              <div className={styles.topTags}>Top Tags:</div>
              <div className={styles.tag1}>{data.tag1}</div>
              <div className={styles.tag2}>{data.tag2}</div>
              <div className={styles.tag3}>{data.tag3}</div>
            </div>
          </div>
        ))}
      </div>
    )
  }
};

export default Info;