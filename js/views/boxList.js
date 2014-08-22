/** @jsx React.DOM */

var React = require('react');
var AddingButton = require('./addButton.js').AddingButton;
var Box = require('./box.js').comp;

/**
 * 
 **/
exports.comp = React.createClass({
   render: function () {
      var that = this;

      return (
      <div>
         <AddingButton index="0" />
            {that.props.list.get().map(function(object, i) {
               return (
                  <div key={i}>
                     <Box>{object}</Box> 
                     <AddingButton index={i + 1} addAaction={that.props.list.add} />
                  </div>
             );})
            }
      </div>);
   }
});
