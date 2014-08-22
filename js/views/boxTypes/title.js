/** @jsx React.DOM */

var React = require('react');
var Option = require('../addButton.js').AddingOption;

exports.comp = React.createClass({

   getInitialState : function() {
      return { 
         text : this.props.model.text
      };
   },
   save : function (e) {
      this.setState({text : e.target.value});
      this.props.model.text = this.state.text;
   },
   render : function () {
      var that = this;
      return (
         <h2>
            <input onChange={that.save} className="invisible-input" type="text" placeholder="Enter Heading Here" value={this.state.text} />
         </h2>
      );
   }
});

exports.icon = React.createClass({

   action : function () {
      this.props.dispatcher.dispatch("ADD_ITEM", {
         id : this.props.index,
         type : "Title"
      });
   },
   render : function() {
      return <Option onClick={this.action}>Title</Option>;
   }
});
