import mongoose from 'mongoose';
const { Schema } = mongoose;

const categorySchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    thumbnail: {
        type: String,
        required: true,
        trim: true,
    },
},
    {
        collection: 'categories',
        timestamps: true
    }
);

const Categorys = mongoose.models.User || mongoose.model('Categories', categorySchema);

export default Categorys;