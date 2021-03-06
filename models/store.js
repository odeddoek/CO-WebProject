var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var Store = new Schema(
    {
        name:  String,
        address: String,
        rank: Number,
        phone: String,
        books: [String],
        coordinates: [Number]
    }
);

module.exports = mongoose.model('Store', Store);