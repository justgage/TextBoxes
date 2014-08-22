/** @jsx React.DOM */


// Libs
var React = require('react');
var AS = require('ampersand-state');

// Dispatcher
var dispatcher = require('./Dispatcher.js');

// View-Controllers
var Title = require('./views/boxTypes/title.js').comp;
var Boxlist = require('./views/boxList.js').comp;

// Stores
var BoxListStore = require('./stores/boxList.js').store;
var Types = require('./views/boxTypes');

console.log(Types);

var text3 = AS.extend({
   props: {
      text: 'string'
   }
});

text3.text = "Live javascript?";

var boxListStore = BoxListStore();

boxListStore.add(0, (
   <Title model={text3} />
));


React.renderComponent(
   <Boxlist list={boxListStore} />,
   document.getElementById("text-box")
);

