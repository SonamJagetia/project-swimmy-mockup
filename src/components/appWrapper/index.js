import React from 'react';
import styles from './style.css';

class AppWrapper extends React.Component {
  render () {
    return (
      <div className={styles.container}>
        <header>
          <button onClick={}>back</button>
          <h1 className={styles.titleText}>{this.props.title}</h1>
        </header>
        {this.props.children}
      </div>
    )
  }
};

const { bool, node, string } = React.PropTypes

AppWrapper.propTypes = {
  children: node,
  title: string,
  backButton: bool
};

export default AppWrapper;