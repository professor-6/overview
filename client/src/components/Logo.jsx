import React from 'react';
import styles from './logo.css';

class Logo extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div id={styles.logo}>
      <div id={styles.littleCircle}></div>
      <div id={styles.bigCircle}>
      <div id={styles.innerCircle}></div>
      </div>
      <div id={styles.logoText}>OpenTable</div>
      </div>
    )
  }
};

export default Logo;