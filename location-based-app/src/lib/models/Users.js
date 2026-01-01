import mongoose from 'mongoose';
import validator from 'validator';
const { Schema } = mongoose;

const userSchema = new Schema({
    fullName: {
        type: String,
        minLength: 3,
        maxLength: 50,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid');
            }
        }
    },
    password: {
        type: String,
        minLength: 7,
    },
    location: {
        lat: Number,
        long: Number,
        // default: 'Karachi, Pakistan',
        // required: true,
    },
    profileImage: {
        type: String,
        // required: true,
    },
    address: {
        type: String,
        // required: true,
    },
    bio: {
        type: String,
        // required: true,
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    }

},
    {
        collection: 'user',
        timestamps: true
    }
);

const Users = mongoose.models.User || mongoose.model('User', userSchema);

export {
    Users
};