'use strict';

import React from 'react';

require('styles//Article.css');

class ArticleComponent extends React.Component {
  render() {
    return (
      <div className="article-component">
        Please edit src/components///ArticleComponent.js to update this component!
      </div>
    );
  }
}

ArticleComponent.displayName = 'ArticleComponent';

// Uncomment properties you need
// ArticleComponent.propTypes = {};
// ArticleComponent.defaultProps = {};

export default ArticleComponent;
