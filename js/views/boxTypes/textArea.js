/** @jsx React.DOM */

var React = require('react');
var Option = require('../Option.js');

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
      this.autoGrow(e.target);
   },
   autoGrow : function(el) {
      if (el.scrollHeight > el.clientHeight) {
         el.style.height = el.scrollHeight + "px";
      }  
   },
   render : function () {
      var that = this;

      if (this.props.editing) {
         return (
            <p>
               <textarea 
                  onChange={that.save} 
                  className="invisible-input noscrollbars" 
                  placeholder="This can be multi-line text" 
                  value={this.state.text} 
                  >
               </textarea>
            </p>
         );
      } else { // rendering
         return (
            <p>{this.state.text}</p>
         )
      }
   }
});

exports.comp = comp;


exports.icon = React.createClass({
   render : function() {
      return (<Option index={this.props.index} type="TextArea">Text Area</Option>);
   }
});
