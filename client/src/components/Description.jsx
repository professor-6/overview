import React from 'react';
import Collapse from 'react-bootstrap/Collapse';
import styles from './description.css';

class Description extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: [],
      collapse: false,
      message: false,
      urlID: window.location.pathname.slice(1)
    };
    this.toggleCollapse = this.toggleCollapse.bind(this);
  };

  componentDidMount() {
    fetch(`/restaurants/${this.state.urlID}`)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            restaurants: result
          })
        },
        (error) => {
          console.log('error w client req to server', error);
        }
      );
  };

  toggleCollapse() {
    this.setState({
      collapse: !this.state.collapse,
      message: !this.state.message
    });
  };

  render() {
    return (
      <div id="description">
        {this.state.restaurants.map((data) => (
          <div className={styles.description}>
            <a className={styles.collapse} onClick={this.toggleCollapse}
              aria-controls="description"
              aria-expanded={this.state.collapse}>{this.state.message ? '- Read less' : '+ Read more'}
            </a>
            <Collapse in={this.state.collapse}>
              <div id="description">{data.description}</div>
            </Collapse>
          </div>
        ))}
        <div className={styles.photosText}>
          Photos
        </div>
      </div>
    );
  };
};

export default Description;