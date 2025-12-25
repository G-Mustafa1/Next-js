import mongoose from 'mongoose';
const { Schema } = mongoose;

const subcategoriesSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
    },
    thumbnail: {
        type: String,
        // required: true,
        // trim: true,
    },
    category: {
        type: mongoose.Types.ObjectId,
        ref: 'Categories',
        required: true
    }
},
    {
        collection: 'subcategories',
        timestamps: true
    }
);

export const SubCategory = mongoose.models.SubCategories || mongoose.model('SubCategories', subcategoriesSchema);