const {Schema, model} = require('mongoose');
const User = require('./User');

const articlesSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
        minlength: 600,
        maxlength: 3000,
    },
    author: {
        type: String,
        required: true,
    },
    categoryName: {
        type:String,
        required: true,
    },
    publicationDate: {
        type: Date,
        default: Date.now,
    },
    isFact: {
        type: Boolean,
        required: function () {
            return !this.isOpinion;
        },
    },
    isOpinion: {
        type: Boolean,
        required: function () {
            return !this.isFact;
        },
    },
    siteSources: {
        type: [String],
        required: function () {
            return this.isFact;
        },
    },
    articleImage: {
        type: String,
    }
});

const Articles = model('Articles', articlesSchema);

module.exports = {Articles};