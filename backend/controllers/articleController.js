const Article = require('../models/Article');

// Defining all methods and business logic for routes

module.exports = {
  findAll(req, res) {
    console.log('get request find all matched records:', req.query);
    const param = JSON.parse(req.query.q);
    console.log(param);
    Article.find(param)
      .then((articles) => res.json(articles))
      .catch((err) => res.status(422).json(err));
  },
  findById(req, res) {
    console.log('get request find by idrecords:', req.query);
    Article.findById(req.params.id)
      .then((article) => res.json(article))
      .catch((err) => res.status(422).json(err));
  },
  create(req, res) {
    console.log('get request create records:', req.body);
    Article.create(req.body)
      .then((newArticle) => { console.log(newArticle); return res.json(newArticle); })
      .catch((err) => res.status(422).json(err));
  },
  update(req, res) {
    console.log('get request update records:', req.query);
    Article.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((article) => res.json(article))
      .catch((err) => res.status(422).json(err));
  },
  remove(req, res) {
    console.log('get request remove record');
    Article.findById({ _id: req.params.id })
      .then((article) => article.remove())
      .then((allArticles) => res.json(allArticles))
      .catch((err) => res.status(422).json(err));
  },
};
