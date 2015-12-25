import React from 'react';
var h = require('react-hyperscript');

export default React.createClass({
  getPair: function() {
    return this.props.pair || [];
  },
  render: function() {
    return h("div.voting", this.getPair().map(entry =>
        h("button", {key: entry, onClick: () => this.props.vote(entry)},
          h("h1", entry))))
  }
});
