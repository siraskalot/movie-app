"use strict";

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var SessionSchema = new Schema({
  _sesionid: {
    type: Schema.Types.ObjectId
  },
  state: {
    type: "String"
  },
  location: {
    type: "String"
  },
  cinema: {
    type: "String"
  },
  sessionDateTime: {
    type: [Schema.Types.Date]
  },
  ticketLink: {
    type: Schema.Types.String
  }
});

// Export the model
module.exports = mongoose.model("Session", SessionSchema);