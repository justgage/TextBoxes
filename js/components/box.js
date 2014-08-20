/** @jsx React.DOM */

var React = require('react');

exports.Box = React.createClass({
   render : function () {
      return <div className="border">
            {this.props.children}
         </div>;
   }
});
