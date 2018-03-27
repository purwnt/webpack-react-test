import React from 'react';
import ReactDOM from 'react-dom';

class Navigation extends React.Component {
  render() {
    return (
      <div className="shopping-list">
        <h1>Navbar for {this.props.name}</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
    );
  }
}

export default () => (
  <Navigation name="Head"/>
)