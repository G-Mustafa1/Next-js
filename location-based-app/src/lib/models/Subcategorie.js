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
        required: true,
        trim: true,
    },
    thumbnail: {
        type: String,
        required: true,
        trim: true,
    },
    category: {
        type: mongoose.Types.ObjectId,
        ref: 'Categories'
    }
},
    {
        collection: 'subcategories',
        timestamps: true
    }
);

const SubCategory = mongoose.models.User || mongoose.model('SubCategories', subcategoriesSchema);

export default SubCategory;