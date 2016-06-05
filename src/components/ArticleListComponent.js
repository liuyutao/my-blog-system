'use strict';

import React from 'react';

require('styles//ArticleList.css');


class ArticleListComponent extends React.Component {
  constructor(props) {
    super(props);

  }


  render() {
    return (
      <div className="articlelist-component">

      </div>
    );
  }
}

ArticleListComponent.displayName = 'ArticleListComponent';

// Uncomment properties you need
// ArticleListComponent.propTypes = {};
// ArticleListComponent.defaultProps = {};

export default ArticleListComponent;
