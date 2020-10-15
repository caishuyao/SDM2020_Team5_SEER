// routes for article

import express from 'express';

const ArticleRouter = express.Router();

import {findAll, create, findById, update, remove} from './Article.controller';

ArticleRouter.route('/')
             .get(findAll)
             .post(create);

ArticleRouter.route('/:id')
             .get(findById)
             .put(update)
	         .delete(remove);

export default ArticleRouter;
