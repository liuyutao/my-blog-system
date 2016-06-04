'use strict';

import React from 'react';
import baseConfig from '../config/base';
require('styles//Index.css');

class IndexComponent extends React.Component {
  constructor(){
    super();
    fetch(baseConfig.apipath + "blog/list").then(function(articles){
      return {articles:articles};
    });
  }
  render() {
    return (
      <div className="index-component">
        <BlogList page="1"/>
      </div>
    );
  }
}

IndexComponent.displayName = 'IndexComponent';

// Uncomment properties you need
// IndexComponent.propTypes = {};
// IndexComponent.defaultProps = {};

export default IndexComponent;
