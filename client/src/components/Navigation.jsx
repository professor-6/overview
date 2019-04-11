import React from 'react';
import styles from './navigation.css';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: [],
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
      },
      (error) => {
        console.log('error w client req to server', error);
      }
    );
}

  render() {
    return (
      <div className={styles.overview}>
        <div id={styles.navBar}>
          <div id={styles.overview}>Overview</div>
          <div id={styles.photos}>Photos</div>
          <div id={styles.menu}>Menu</div>
          <div id={styles.reviews}>Reviews</div>
        </div>
        {this.state.restaurants.map((data) => (
        <h1 className={styles.name}>{data.name}</h1>
        ))}
      </div>
    );
  };
};

export default Navigation;