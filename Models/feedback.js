const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
  name: {
    type: String,
    default: '',
  },
  date: {
    type: Date,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  comments: {
    type: String,
    default: '',
  },
}, {
  timestamps: true,
});

const feedback = mongoose.model('Feedback', feedbackSchema);
module.exports = feedback;
