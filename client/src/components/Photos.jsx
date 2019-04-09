import React from 'react';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';

const images = [
  { src: 'https://s3.amazonaws.com/open-table-fec/FEC+PICS/download-1.jpg', width: 4, height: 3},
  { src: 'https://s3.amazonaws.com/open-table-fec/FEC+PICS/download-11.jpg', width: 4, height: 3 },
  { src: 'https://s3.amazonaws.com/open-table-fec/FEC+PICS/download-12.jpg', width: 4, height: 3 },
  { src: 'https://s3.amazonaws.com/open-table-fec/FEC+PICS/download-13.jpg', width: 4, height: 3 },
  { src: 'https://s3.amazonaws.com/open-table-fec/FEC+PICS/download-14.jpg', width: 4, height: 3 },
  { src: 'https://s3.amazonaws.com/open-table-fec/FEC+PICS/download-15.jpg', width: 4, height: 3 },
  { src: 'https://s3.amazonaws.com/open-table-fec/FEC+PICS/download-16.jpg', width: 4, height: 3 },
  { src: 'https://s3.amazonaws.com/open-table-fec/FEC+PICS/download-17.jpg', width: 4, height: 3 },
  { src: 'https://s3.amazonaws.com/open-table-fec/FEC+PICS/download-18.jpg', width: 4, height: 3 },
  { src: 'https://s3.amazonaws.com/open-table-fec/FEC+PICS/download-9.jpg', width: 4, height: 3 }
];

class Photos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      currentImage: 0,
      lightboxIsOpen: false,
      images: {}
    };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
  };

// get all photos
  componentDidMount() {
    fetch(`/photos`)
    .then(
      (result) => {
        this.setState({
          photos: result
        });
      },
      (error) => {
        console.log('error w client req to server', error);
      }
    );
  };

  // opens full screen view
  openLightbox(event, obj) {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true,
    });
  };

  // closes full screen view
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  };

  // switch between photos
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
      <div id="photoGallery">
        <Gallery photos={images} onClick={this.openLightbox} />
        <Lightbox images={images}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen}
        />
      </div>
    );
  };
};

export default Photos;