import { Schema, model } from 'mongoose';
import { generatePasswordHash } from '../../utils/password';

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  profileImage: { type: String, required: false, default: '' },
  createdAt: { type: Date, default: () => new Date() },
  updatedAt: { type: Date, default: () => new Date() },
});

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();

  this.password = await generatePasswordHash(this.password);

  next();
});

const userModel = model('User', userSchema);

export default userModel;
