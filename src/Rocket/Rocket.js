import React from 'react';
import styles from './Rocket.module.css';

export default class Rocket extends React.Component {
  render() {
    return (
      <div>
        <img src="/shuttle.png" alt="spaceshuttle" className={styles.img} />
      </div>
    );
  }
}