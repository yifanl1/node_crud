const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// as of now, all fields are required and no default values are provided
// this could be changed, but as I don't know what fields are most important, 
//  cI declined to make this decision

const adSchema = new Schema({
    customerId: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    templateId: {
        type: String,
        required: true,
        enum: ["Single Image Ad", "Carousel Ad"]
    },
    startDate: {
        type: Date,
        required: true
    },
    repeat: {
        type: String,
        required: true,
        enum: ["daily", "weekly", "monthly"]
    },
    isActive: {
        type: Boolean,
        required: true
    }
}, {
    timestamps: true
});

module.exports = adSchema;
