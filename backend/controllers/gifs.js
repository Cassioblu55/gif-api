const express = require('express');
const router = express.Router();
const Gif = require('../models/Gif');

router.get('/', (req, res) => {
	// res.send('hello world');
	// get all the gifs
	Gif.find({}).then((gifs) => res.json(gifs));
});

router.get('/:id', (req, res) => {
	// get gif by title
	Gif.findById(req.params.id).then((gif) => res.json(gif));
});

router.post('/', (req, res) => {
	const newGif = req.body; // { title: 'asdf' , url: 'asdf' }
	// create a Gif
	Gif.create(newGif).then((gif) =>
		Gif.find({}).then((gifs) => {
			res.json(gifs);
		})
	);
});

router.put('/:id', (req, res) => {
	Gif.findOneAndUpdate({ _id: req.params.id }, req.body).then((gif) =>
		Gif.find({}).then((gifs) => {
			res.json(gifs);
		})
	);
});

router.delete('/:id', (req, res) => {
	// use title as a param to find the record we want to remove
	Gif.findOneAndDelete({ _id: req.params.id }).then((gif) => {
		Gif.find({}).then((gifs) => {
			res.json(gifs);
		});
	});
});

module.exports = router;
