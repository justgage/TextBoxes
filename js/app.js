/** @jsx React.DOM */

var React = require('react');

var AS = require('ampersand-state');

var Add = require('./components/addButton.js');
var Title = require('./components/title.js').Title;
var Box = require('./components/box.js').Box;


var text3 = AS.extend({
   props: {
      text: 'string'
   }
});

text3.text = "This is coming from ampersand-state";

var list = [
   <Title model={text3} />
];

var add = function(list, i) {
   console.log("adding to list?");
   //list.
}

React.renderComponent((
         <div>
      <Add.AddingButton />
      {list.map(function(object, i) {
         return (
            <div key={i}>
            <Box>{object}</Box> 
            <Add.AddingButton index={i} addAaction={add} /></div>
                );
      })}
      </div>),
      document.getElementById("text-box"));



