import mongoose from 'mongoose';
const { Schema } = mongoose;

const eventSchema = new Schema({
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
    startDate: {
        type: String,
    },
    endDate: {
        type: String,
    },
    startTime: {
        type: String,
    },
    endTime: {
        type: String,
    },
    location: {
        lat: Number,
        long: Number,
    },
    address: {
        type: String,
    },
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    },
    going: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'User',
        }
    ] 

},
    {
        collection: 'event',
        timestamps: true
    }
);

const Event = mongoose.models.User || mongoose.model('Event', eventSchema);

export default Event;