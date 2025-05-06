import mongoose from 'mongoose';

const viewSchema = new mongoose.Schema({
  viewer: {
    type: String,
    required: true,
  },
  time: {
    type: Number,
    default: 0,
  },
  viewerCountry: {
    type: String,
    required: true,
  },
  metadata: {
    type: Object,
    default: {},
  },
  createdAt: {
    type: Date,
    default: () => new Date(),
  },
  updatedAt: {
    type: Date,
    default: () => new Date(),
  },
});

const viewModel = mongoose.model('View', viewSchema);

export default viewModel;
