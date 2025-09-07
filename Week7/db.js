import mongoose from 'mongoose';

const { Schema, Types } = mongoose;

const UserSchema = new Schema({
    username: String,
    email: { type: String, unique: true },
    password: String
});

const TodoSchema = new Schema({
    description: String,
    done: Boolean,
    userId: Types.ObjectId
});

export const UserModel = mongoose.model('users', UserSchema);
export const TodoModel = mongoose.model('todos', TodoSchema);