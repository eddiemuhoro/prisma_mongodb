import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    name: String,
    email: String,
    selectedFile: String,
})

const postProfile = mongoose.model('postProfile', postSchema);

export default postProfile;