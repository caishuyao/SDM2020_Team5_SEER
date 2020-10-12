// routes for article

import { Article } from "./Article";

class ArticleRoutes {
    route(app) {
      app.get('api/article/',Article.list);

      app.get('api/article/test',(req, res) => {
          res.status(200).json({message:"Get Request successful"});
      });

      app.post('api/article/test',(req, res) => {
          res.status(200).json({message:"Post Request successful"});
      });

    }
}

export default ArticleRoutes;
