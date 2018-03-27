import React from 'react';
import ReactDOM from 'react-dom';

class Footer extends React.Component {
  render() {
    return (
      <div className="shopping-list">
        <h1>Footer for {this.props.name}</h1>
      </div>
    );
  }
}

export default () => (
  <Footer name="Foot"/>
)