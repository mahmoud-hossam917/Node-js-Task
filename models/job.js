const mongoose = require('mongoose');
const {models} = require("mongoose");

let jobSchema = new mongoose.Schema({
    date:
        {
          type : Date,
          default: Date.now
        },

   field:
        {
          name:
            {
              type:String
            }
    }

})

exports.Job = mongoose.model('Job',jobSchema)