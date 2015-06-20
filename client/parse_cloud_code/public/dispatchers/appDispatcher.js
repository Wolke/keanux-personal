'use strict';

// Required Library
var Dispatcher = require('flux').Dispatcher;
var assign = require('object-assign');

// Dispatcher
var appDispatcher = assign(new Dispatcher(), {
  handleServerAction: function (action) {
    this.dispatch({
      source: 'server',
      action: action
    });
  },
  handleViewAction: function (action) {
    this.dispatch({
      source: 'view',
      action: action
    });
  }
});

module.exports = appDispatcher;
