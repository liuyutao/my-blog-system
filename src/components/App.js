require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';



class AppComponent extends React.Component {
  constructor() {
    super();
    this.state = {isLogin:false}
  }

  render() {
    return (
      <div className="index">
        App
      </div>
    );
  }
}


AppComponent.defaultProps = {};

export default AppComponent;
