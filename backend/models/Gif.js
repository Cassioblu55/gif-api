const mongoose = require('../db/connection');

// define Gif schema, title, url
const GifSchema = new mongoose.Schema({
	name: String,
	url: String,
});

// instantiate the Gif model, passing in the schema we just defined
const Gif = mongoose.model('Gif', GifSchema);

// export
module.exports = Gif;
