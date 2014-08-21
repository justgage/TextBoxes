/** @jsx React.DOM */

// Libs
var React = require('react');
var AS = require('ampersand-state');

// Components
var Title = require('./components/title.js').comp;
var Box = require('./components/box.js').comp;
var Boxlist = require('./components/boxList.js').comp;
var BoxListModel = require('./model/boxList.js').model;

/**
 * This is a list that will keep track of the different types of content
 */
var TypesList = {

};

var text3 = AS.extend({
   props: {
      text: 'string'
   }
});

text3.text = "Live javascript?";

var boxListModel = BoxListModel();

boxListModel.add(0, (
   <Title model={text3} />
));


React.renderComponent(
   <Boxlist list={boxListModel} />,
   document.getElementById("text-box")
);

