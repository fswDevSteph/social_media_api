const mongoose = require('mongoose');

const thoughtSchema = new mongoose.Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
        username: {
            type: String,
            required: true
        },
        reactions: [
            {
                reactionId: {
                    type: mongoose.SchemaTypes.ObjectId,
                    default: () => new mongoose.Types.ObjectId()
                },
                reactionBody: {
                    type: String,
                    required: true,
                    maxlength: 280
                },
                username: {
                    type: String,
                    required: true
                },
                createdAt: {
                    type: Date,
                    default: Date.now
                }
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

const Thought = mongoose.model('Thought', thoughtSchema);

module.exports = Thought;