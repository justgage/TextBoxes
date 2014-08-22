
var Dispatcher = require("../Dispatcher.js");
var act = require("./constants.js");


/**
 * BoxActions
 */
module.exports = {

   addBox : function (place, type) {
      Dispatcher.dispatch(act.ADD_BOX, {
         place : place,
         type : type,
      });
   },

   removeBox : function (place) {
      Dispatcher.dispatch(act.REMOVE_BOX, {
         place : place
      });
   },

   updateBox : function (place, data) {
      Dispatcher.dispatch(act.UPDATE_BOX, {
         place : place,
         data : data
      });
   },

   save : function (data) {
      Dispatcher.dispatch(act.SAVE, {
         place : place,
         data : data
      });
   }

};
