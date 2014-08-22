/** @jsx React.DOM */

// Libs
window.React = require('react');

// View-Controllers
var Boxlist = require('./views/boxList.js').comp;

// Stores
var BoxListStore = require('./stores/boxList.js').store;

var boxListStore = BoxListStore();

// Dispatcher
var Dispatcher = require("./Dispatcher.js");

Dispatcher.register(boxListStore);

React.renderComponent(
   <Boxlist listStore={boxListStore} list={boxListStore.get()} />,
   document.getElementById("text-box")
);

