/** @jsx React.DOM */

var React = require('react');
var AddingButton = require('./addButton.js').AddingButton;
var PreviewButton = require('./previewButton.js');
var Box = require('./box.js').comp;

var previewing = false;

/**
 * 
 **/
exports.comp = React.createClass({

   componentWillMount : function (j) {
      var that = this;
      this.props.listStore.onChange(function () {
         console.log(that.props.list);
         that.forceUpdate();
      });
   },

   render: function () {
      var that = this;

      return (
      <div>
         <PreviewButton bool={previewing} />
         <AddingButton index="0" />
            {that.props.list.map(function(Object, i) {
               var Comp = Object.comp;
               return (
                  <div key={Object.id}>
                     <Box><Comp data={Object.data} /></Box> 
                     <AddingButton index={i + 1} addAaction={that.props.listStore.add} />
                  </div>
             );})
            }
      </div>);
   }
});
