/** @jsx React.DOM */

var React = require('react');
var Option = require('../Option.js').Option;

var comp = React.createClass({

   getInitialState : function() {
      return { 
         text : ""
      };
   },
   save : function (e) {
      this.setState({text : e.target.value});
      // export somehow?
   },
   render : function () {
      var that = this;
      return (
         <h2>
            <input 
               onChange={that.save} 
               className="invisible-input" 
               type="text" 
               placeholder="Enter Heading Here" 
               value={this.state.text} 
            />
         </h2>
      );
   }
});

exports.comp = comp;

exports.icon = React.createClass({
   render : function() {
      console.log(comp);
      return (<Option index={this.props.index} type="Title">H1</Option>);
   }
});
