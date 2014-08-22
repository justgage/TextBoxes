/**
 * The Dispatcher
 */

module.exports = (function () {

   var stores = [];
   var nextID = 0;
   var dispatching = false;

   var pub = {
      register : register,
      dispatch : dispatch
   };

   /**
    * Registers a new store
    */
   function register(store) {
      stores[nextID] = store;
      return nextID;
   }

   /**
    * Unregister a store
    */
   function unregister(storeID) {
      delete stores[storeID];
   }

   /**
    * Dispatches an action to all the stores
    */
   function dispatch(action, data) {
      if(dispatching === false) {
         dispatching = true;
         for (var i = 0, len = stores.length; i < len; i++) {
            stores[i].recive(action, data);
         }
         dispatching = false;
      } else {
         throw Error("Can not dispaching while dispatching!");
      }
   }

   return pub;
})();


