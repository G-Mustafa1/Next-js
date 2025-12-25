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

export const Categorys = mongoose.models.Categories || mongoose.model('Categories', categorySchema);
