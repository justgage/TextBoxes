/** @jsx React.DOM */

var React = require('react');
var AddingButton = require('./addButton.js').AddingButton;
var PreviewButton = require('./previewButton.js');
var Box = require('./box.js').comp;

/**
 * 
 **/
exports.comp = React.createClass({

   componentWillMount : function (j) {
      var that = this;
      this.props.listStore.onChange(function () {
         that.forceUpdate();
      });
   },

   getInitialState : function() {
      return { editing : this.props.editing || true }
   },

   togglePreview : function(editing) {
      this.setState({
         editing : editing
      });
   },

   render: function () {
      var that = this;

      renderList = [];

      renderList.push(
         <PreviewButton change={this.togglePreview} />
      );

      // only show adding buttons when editing
      if(this.state.editing === true) {
         renderList.push(<AddingButton index="0" />);
      }

      // each of the editing fields
      for (var i = 0, len = this.props.list.length; i < len; i++) {
         var obj = this.props.list[i];
         var Comp = obj.comp;
         var items = [
            <Box><Comp editing={this.state.editing} data={obj.data} /></Box> 
         ];

         // only show adding buttons when editing
         if(this.state.editing === true) {
            items.push(
               <AddingButton index={i + 1} addAaction={that.props.listStore.add} />
            );
         }

         console.log(items);

         renderList.push(<div key={obj.id}>{items}</div>);
      }

      return (
         <div>
            {renderList}
         </div>
      );
   }
});
