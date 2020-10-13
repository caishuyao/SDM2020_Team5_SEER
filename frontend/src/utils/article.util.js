
const  articles2array = (articles,idx) =>{
        if(idx === undefined ){
            idx = 1;
        }
        var tmp = [];
        articles.map((row,index)=> {
        tmp.push([idx+index,row['author'],row['title'], row['likes']]);
        });
        return tmp;
 };

const fetchArticles = async (post)=>{
    const response = await fetch('/api/article', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
        body: JSON.stringify(post),
    });
    const body = await response.json();
    return articles2array(body);
};

export default fetchArticles;
