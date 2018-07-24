import React, { Component } from 'react';
import styles from './App.css';


class App extends Component {
  
  render () {
    return (
        <div className={styles.app}>
          <h1>Hi, I'm a React App</h1>
          <p className = {styles.app__text}>This is really working!</p>
          <button>Toggle Persons</button>
        </div>
    )
  }
};

export default App;