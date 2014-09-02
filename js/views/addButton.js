/** @jsx React.DOM */
var React = require('react');
var Types = require('./boxTypes').list;
var Option = require('./Option.js');
var PreviewButton = require('./previewButton.js');

module.exports.AddingButton = React.createClass({

   getInitialState : function () {
      return { open : false };
   },

   open : function () {
      console.log("Open!");
      this.setState({open : !this.state.open});
   },

   render : function () {
      if (this.state.open) {
         return ( <div className="add" onClick={this.open}>
            <AddingPicker index={this.props.index} />
         </div>);
      } else {
         return ( <div className="add" onClick={this.open}></div>);
      }
   }
});


var AddingPicker = React.createClass({
   render : function () {
      var components = [];

      for (var i = 0, len = Types.length; i < len; i++) {
         var Item = Types[i].icon;
         components.push(<Item key={i} index={this.props.index} />);
      }


      return (
         <div>
            <p>Click a option below to insert a new type of input</p>
            {components}
            <Option key={ Infinity } type="Cancel">Cancel</Option>
            <div className="clearfix" />
         </div>
      );
   }
});
