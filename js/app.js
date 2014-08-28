/** @jsx React.DOM */

// Libs
window.React = require('react');

// View-Controllers
var Boxlist = require('./views/boxList.js').comp;

// Stores
var boxListStore = require('./stores/boxList.js').store();

// Dispatcher
var Dispatcher = require("./Dispatcher.js");

Dispatcher.register(boxListStore);

window.boxListStore = boxListStore;

React.renderComponent(
   <Boxlist listStore={boxListStore} list={boxListStore.get()} />,
   document.getElementById("text-box")
);

