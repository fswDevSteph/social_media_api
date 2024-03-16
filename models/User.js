const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( // create a new schema
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true // does not allow for spaces in the username
        },
        email: {
            type: String,
            required: true,
            unique: true, // does not allow for duplicate emails
            match: [/.+@.+\..+/, 'Please enter a valid e-mail address']
        },
        thoughts: {
            type: mongoose.Schema.Types.ObjectId, // this is telling Mongoose to expect an ObjectId and to tell it that it's data comes from the Thought model
            ref: 'Thought'
        },
        friends: [
            {
                type: mongoose.Schema.Types.ObjectId, // this is telling Mongoose to expect an ObjectId and to tell it that it's data comes from the User model
                ref: 'User'
            }
        ]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);

userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});
const User = mongoose.model('User', userSchema);

module.exports = User;