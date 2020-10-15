// ArticlesControllers.js
import { Article } from ('./Article.model');

// Defining all methods and business logic for routes

	const findAll = (req, res) => {
		Article.find(req.query)
			.then(articles => res.json(articles))
			.catch(err => res.status(422).json(err));
	};

	const findById = (req, res)=>{
		Article.findById(req.params.id)
			.then(article => res.json(article))
			.catch(err => res.status(422).json(err));
	};

	const create = (req, res) => {
		Article.create(req.body)
			.then(newArticle => res.json(newArticle))
			.catch(err => res.status(422).json(err));
	};

	const update = (req, res) => {
		Article.findOneAndUpdate({ _id: req.params.id }, req.body)
			.then(article => res.json(article))
			.catch(err => res.status(422).json(err));
	};

	const remove = (req, res) => {
		Article.findById({ _id: req.params.id })
			.then(article => article.remove())
			.then(allarticles => res.json(allarticles))
			.catch(err => res.status(422).json(err));
	};

export default {findAll, findById, create, update, remove};
