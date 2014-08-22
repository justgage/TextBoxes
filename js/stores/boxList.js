var actions = require('../actions/constants.js');
var boxTypes = require('../views/boxTypes/').object;

/**
 * This will create a list that will represent the current
 * state
 */
exports.store = function () {
   var list = []; 
   var events = [];

   // public stuff
   var pub = {
      emit : emit,
      onChange : onChange,
      recive : recive,
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

   function recive(action, data) {
      console.log("recived", action, data);
      switch(action) {
         case actions.ADD_BOX:
            console.log("ADD_BOX");
            add(data.place, data.type);
            break;
      }
   }

   function add(nth ,item) {
      var Item = boxTypes[item].comp;
      list.splice(nth, 0, Item);
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
