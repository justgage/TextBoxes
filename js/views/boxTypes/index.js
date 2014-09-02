
module.exports.object = {
   Title : require("./title.js"),
   SubTitle : require("./subtitle.js"),
   TextArea : require("./textArea.js")
};

var list = [];

// changes object to an array
for(var key in module.exports.object) {
   list.push(module.exports.object[key]);
}

module.exports.list = list;
