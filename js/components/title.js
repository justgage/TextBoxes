/** @jsx React.DOM */

var React = require('react');

exports.Title = React.createClass({

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
         <form onSubmit={that.save}>
            <h2>
               <input onChange={that.save} className="invisible-input" type="text" placeholder="Enter Heading Here" value={this.state.text} />
            </h2>
         </form>
      );
   }
});
