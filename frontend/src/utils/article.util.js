
const  articles2array = async (articles,idx) =>{
        if(idx === undefined ){
            idx = 1;
        }
        var data = await articles.json();
        console.log(data);

        return  data.map((row,index)=> [idx+index,row['author'],row['title'], row['likes']]);
 };

//
const postArticles = async (post)=> {
    return fetch('/api/article', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
        body: JSON.stringify(post),
    }).then((response) => response.status===200 ? articles2array(response) : []);
};

const fetchArticles = async (post) => {
    var params = new URLSearchParams(post).toString();
    console.log(params);
    return fetch('/api/article', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    }).then((response) => response.status===200 ? articles2array(response) : []);
};

export { fetchArticles, postArticles };
