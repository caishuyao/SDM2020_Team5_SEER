const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema({
    title:{
        type:String,
        required:true,
    },
    abstract:{
        type:String,
        required:false,
    },
    dataPublished:{
        type:String,
        required:false,
    },
    practice:{
        type:String,
        required:false,

    },
    claim:{
        type:String,
        required:false,
    },
    author:{
        type:String,
        required:false,
    },
    dio: {
        type:String,
        required:false,
    },
    });

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;
