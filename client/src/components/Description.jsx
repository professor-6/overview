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
    fetch(`/1`)
      .then(res => res.json())
      .then(
        (result) => {
          console.log(window.location.pathname)
          this.setState({
            restaurants: result
          })
        },
        (error) => {
          console.log('error w client req to server', error);
        }
      );
  };

  
// ---- working on getting the endpoint to work ----

  // componentDidMount() {
  //   this.getData();
  // }

  // getData() {
  //   const id = parseInt(window.location.pathname.split('/').pop());
  //   console.log(id)
  //   const self = this;
  //   fetch(`/${id}`)
  //     .then(res => res.json())
  //     .then(result => this.setState({ restaurants: result }))
  //     .catch((error) => {
  //       console.log("error", error)});
  // }

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