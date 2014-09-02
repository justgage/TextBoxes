/** @jsx React.DOM */
var React = require('react');

module.exports = React.createClass({
   getInitialState : function() {
      return { editing : this.props.editingDef || false }
   },
   toggleState : function() {
      this.setState({editing : !this.state.editing });
      this.props.change(this.state.editing);
   },
   render : function () {
      that = this;
      return (
         <button className="preview" onClick={this.toggleState}>
            {that.state.editing ? "Edit" : "Preview" }
         </button>
      );
   }
});
