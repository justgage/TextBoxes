/** @jsx React.DOM */
var React = require('react');
var Types = require('./boxTypes').list;

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
         return ( <div className="add" onClick={this.open}>+</div>);
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
            {components}
         </div>
      );
   }
});
