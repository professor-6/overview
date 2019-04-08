import React from 'react';
import Collapse from 'react-bootstrap/Collapse';

class Description extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: [],
      collapse: false,
      message: false,
    }
    this.toggleCollapse = this.toggleCollapse.bind(this);
  };


  componentDidMount() {
    fetch(`api/restaurants/1`)
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
          <div className="description">
            <a id="collapse" onClick={this.toggleCollapse}
              aria-controls="description"
              aria-expanded={this.state.collapse}>{this.state.message ? '- Read less' : '+ Read more'}
            </a>
            <Collapse in={this.state.collapse}>
              <div id="description">{data.description}</div>
            </Collapse>
          </div>
        ))}
        <div id="photosText">
          Photos
        </div>
      </div>
    );
  };
};

export default Description;