import React from 'react';

class Photos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullScreen: false,
      photos: []
    }
  }

  componentDidMount() {
    fetch(`api/photos`)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            photos: result
          });
          console.log(this.state.photos)
        },
        (error) => {
          console.log('error w client req to server', error);
        }
      )
  };

  render() {
    return (
      <div>
        {this.state.photos.map((photo) => (
          <div id="photos">
            <img src={photo.photo1} />
            <img src={photo.photo2} />
            <img src={photo.photo3} />
            <img src={photo.photo4} />
            <img src={photo.photo5} />
            <img src={photo.photo6} />
            <img src={photo.photo7} />
            <img src={photo.photo8} />
            <img src={photo.photo9} />
            <img src={photo.photo10} />
          </div>
        ))}
      </div>
    )
  }
}

export default Photos;