/** @jsx React.DOM */

// Libs
var React = require('react');
var AS = require('ampersand-state');

// Components
var Title = require('./components/title.js').comp;
var Box = require('./components/box.js').comp;
var AddingList = require('./components/addingList.js').comp;

/**
 * This is a list that will keep track of the different types of content
 */
var TypesList = {

};

// Models

/**
 * This will create a list that will represent the current
 * state
 */
var AddList = function () {
   var list = [];

   var events = [];

   // public stuff
   var pub = {
      emit : emit,
      onChange : onChange,
      add : add,
      remove : remove,
      get : get,
      move : move
   };

   function emit() {
      for (var i = 0, len = events.length; i < len; i++) {
         events[i]();
         console.log("event " + i + " fired");
      }
   }

   function onChange(func) {
      events.push(func);
   }

   function add(nth ,item) {
      list.splice(nth, 0, item);
      emit();
   }

   function remove(nth ,item) {
      list.splice(nth, 1);
      emit();
   }

   function get(nth) {
      if(typeof id === "undefined") {
         return list;
      } else {
         return list[nth];
      }
   }

   function move(a, b) {
      // remove item
      var temp = list.splice(a, 1);
      // place it back
      list.splice(b, 0, temp);
      emit();
   }

   return pub;

};


var text3 = AS.extend({
   props: {
      text: 'string'
   }
});

text3.text = "Live javascript?";

var addingList = AddList();

addingList.add(0, (
   <Title model={text3} />
));



React.renderComponent(
   <AddingList list={addingList} />,
   document.getElementById("text-box")
);



