/** @jsx React.DOM */

var React = require('react');
var Option = require('../Option.js').Option;

// this will create an instance of component
// with an "data" being it's external data that will
// be passed in
exports.create = function() {
   return {
      comp : comp,
      data : {
         text : ""
      }
   };
};

var comp = React.createClass({

   getInitialState : function() {
      return { 
         text : this.props.data.text
      };
   },
   save : function (e) {
      this.setState({text : e.target.value});

      // NOTE: this relies on passing by refrence
      this.props.data.text = e.target.value;
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
