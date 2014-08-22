/** @jsx React.DOM */

var React = require('react');

exports.comp = React.createClass({
   render : function () {
      return <div className="border">
            {this.props.children}
         </div>;
   }
});
