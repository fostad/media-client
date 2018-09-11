import React from "react";
import Nav from './nav';

class Layout extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Layout;
