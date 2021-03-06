var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CommentSchema = new Schema
({
    signedBy: { type: Schema.Types.ObjectId, ref: 'User'},
    text: {
        type: String,
        required: true
    },
    createdAt: 
    {
        type: Date,
        default: Date.now
    },
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment'}]
});

var Comment = mongoose.model('Comment', CommentSchema);
module.exports = Comment;