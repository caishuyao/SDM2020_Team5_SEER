// Article

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema  = new Schema({
    title:{
        type:String,
        required:true,
    },
    dataPublished:{
        type:String,
        required:true,
    },
    claim:{
        type:String,
        required:true,
    },
    author:{
        type:String,
        required:true,
    },
    dio: {
        type:String,
        required:true,
    },
    });

const Article = mongoose.model('Article', articleSchema);

export default Article;
