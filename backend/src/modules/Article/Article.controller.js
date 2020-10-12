// ArticlesControllers.js
const Article = require('../models/Articles');

// Defining all methods and business logic for routes

module.exports = {
	findAll: function(req, res) {
		Article.find(req.query)
			.then(articles => res.json(articles))
			.catch(err => res.status(422).json(err));
	},
	findById: function(req, res) {
		Article.findById(req.params.id)
			.then(article => res.json(article))
			.catch(err => res.status(422).json(err));
	},
	create: function(req, res) {
		Article.create(req.body)
			.then(newArticle => res.json(newArticle))
			.catch(err => res.status(422).json(err));
	},
	update: function(req, res) {
		Article.findOneAndUpdate({ _id: req.params.id }, req.body)
			.then(article => res.json(article))
			.catch(err => res.status(422).json(err));
	},
	remove: function(req, res) {
		Article.findById({ _id: req.params.id })
			.then(article => article.remove())
			.then(allarticles => res.json(allarticles))
			.catch(err => res.status(422).json(err));
	}
};
