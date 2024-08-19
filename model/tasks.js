// models/Task.js
const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  desc: {
    type: String,
    trim: true
  },
  date: {
    type: Date,
    required: true
  },
  status: {
    type: String,
    enum: ['to-do', 'in-progress', 'done', 'expired'],
    required: true
  }
});

exports.Task = mongoose.model('Task', taskSchema);
