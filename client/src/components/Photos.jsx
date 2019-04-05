import React from 'react';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';

class Photos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      currentImage: 0
    }
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
  }

  componentDidMount() {
    fetch(`api/photos`)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            photos: result
          });
          console.log(this.state.photos[0].photo1)
        },
        (error) => {
          console.log('error w client req to server', error);
        }
      )
  };

  openLightbox(event, obj) {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true,
    });
  };

  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  };

  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  };

  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  };

  render() {
    return (
      <div>
        <Gallery photos={this.state.photos} onClick={this.openLightbox} />
        <Lightbox images={this.state.photos}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen}
        />
      </div>
    )
  }
}

export default Photos;