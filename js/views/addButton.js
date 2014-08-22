/** @jsx React.DOM */
var React = require('react');

exports.AddingPicker = React.createClass({
   render : function () {
return (<div>
         {this.props.options.map(function(object, i) {
         return <div key={i}> {object} </div>;
         })
         }</div>
      );
   }
});

/**
 * @props:
 * - dispatcher : currently used dispatcher
 * - type : type of content such as "Title"
 */
exports.Option = React.createClass({
   action : function () {
      this.props.dispatcher.dispatch("ADD_ITEM", {
         id : this.props.index,
         type : this.props.type,
      });
   },
   render : function () {
      return (
         <div onClick={this.action}> 
            {this.props.children}
         </div>
      );
   }
});

exports.AddingButton = React.createClass({
   render : function () {
      return (
            <div className="add" onClick={this.action}>+</div>
            );
   }
});

