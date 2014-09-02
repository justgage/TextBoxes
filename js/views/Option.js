/** @jsx React.DOM */
var React = require('react');

var actions = require('../actions/BoxActions.js');

/**
 * @props:
 * - dispatcher : currently used dispatcher
 * - type : type of content such as "Title"
 */
module.exports = React.createClass({
   action : function () {
      actions.addBox(this.props.index, this.props.type);
   },
   render : function () {
      return (
         <div onClick={this.action} className="option"> 
            {this.props.children}
         </div>
      );
   }
});

