var mongoose = require("mongoose");

const usersSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
    },
    age: {
        type: Number,
    },
    weight: {
        type: Number,
    },
    height: {
        type: Number,
    },
    goal: {
        type: String,
        required: true,
    },
    activity_level: {
        type: String,
        required: true,
    },
    trainer: {
        type: Boolean,
        default: false,
    },
    verified: {
        type: Boolean,
        default: false,
    },
    member_status: {
        type: String,
        required: true,
    },
    trainer_rating: {
        type: Number,
        default: 0,
    },
    membership: {
        type: Date,
    },
    credit: {
        type: Number,
        default: 0,
    },
    created_at: {
        type: Date,
        default: Date.now(),
    },
});

module.exports = mongoose.model("User", usersSchema);
