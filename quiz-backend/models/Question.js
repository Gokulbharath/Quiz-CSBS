import mongoose from 'mongoose';

const optionSchema = new mongoose.Schema({
  text: { type: String, required: true },
  isCorrect: { type: Boolean, default: false }
});

const questionSchema = new mongoose.Schema({
  question: { type: String, required: true },
  options: [optionSchema],
  answer: { type: String, required: true },
  category: { type: String },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Question', questionSchema);
