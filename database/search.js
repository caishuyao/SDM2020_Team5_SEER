const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

let seersearch = new Schema(
    {
    submitterName: {
        type: String
    },

    title: {
        type: String
    },
    datePublished: {
        type: String
    }
},
    {
    collection: 'search'
});
module.exports = mongoose.model('seersearch',seersearch);

