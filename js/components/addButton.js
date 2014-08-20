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

exports.AddingOption = React.createClass({
   render : function () {
   }
});

exports.AddingButton = React.createClass({
   render : function () {
      return (
            <div className="add" onClick={this.props.addAction}>+</div>
            );
   }
});

