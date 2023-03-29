const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://locnvph20710:loccantat@hackerlo.qv3nwz6.mongodb.net/?retryWrites=true&w=majority");
const PhotoSchema = new mongoose.Schema({
    id: String,
    albumId: String,
    title: String,
    url: String,
    thumbnailUrl: String
},{
    timestamps:true,
});
const PhotoModel = mongoose.model('models', PhotoSchema);
module.exports = PhotoModel;