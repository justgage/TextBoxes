/** @jsx React.DOM */

React = require('react');


var AddingPicker = React.createClass({
   render : function () {
return (<div>
         {this.props.options.map(function(object, i) {
         return <div key={i}> {object} </div>;
         })
         }</div>
      );
   }
});

var InputText = function (input) {
   var text = input || "";

   this.set = function(input) {
      text = input;
   };

   this.get = function() {
      return text;
   };
};

var AddingOption = React.createClass({
   render : function () {

   }
});

var Title = React.createClass({

   getInitialState : function() {
      return { 
         text : this.props.model.get()
      };
   },
   save : function (e) {
      this.setState({text : e.target.value});
      this.props.model.set(this.state.text);
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

var AddingButton = React.createClass({
   render : function () {
      return (
            <div className="add" onClick={this.props.addAction}>+</div>
            );
   }
});

var Box = React.createClass({
   render : function () {
      return <div className="border">
            {this.props.children}
         </div>;
   }
});

var text1 = new InputText();
var text2 = new InputText();

text1.set("This is in my Model");

var list = [
   <Title model={text1} />,
   <Title model={text2} />
];

var add = function(list, i) {
   console.log("adding to list?");
   //list.
}

React.renderComponent((
         <div>
      <AddingButton />
      {list.map(function(object, i) {
         return (
            <div key={i}>
            <Box>{object}</Box> 
            <AddingButton index={i} addAaction={add} /></div>
                );
      })}
      </div>),
      document.getElementById("text-box"));



