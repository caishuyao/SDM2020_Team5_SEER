import { Practices, Claims, SupportRate } from "variables/general";

const  articles2array = async (articles,idx) =>{
        if(idx === undefined ){
            idx = 1;
        }
        var data = await articles.json();
        console.log(data);
        return  data.map((row,index)=> convert(row,index));
 };

const convert = (row,index) =>{
 var record=[];
  record.push(""+(idx+index));
  record.push(row['author']);
  record.push(row['title']);
  record.push("http://doi.org/"+row['doi']);
  record.push(row['abstract']);
  record.push(row['claims'].join(","));
  record.push(SupportRate(row['supportRating']));
};

//
const postArticles = async (post)=> {
    return fetch('/api/article', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
        body: JSON.stringify(post),
    }).then((response) =>
      response.status===200 ? {retCode:0,retMsg:'A record was created successfully!'}
                            : {retCode:-1,retMsg:'Some error happened, please concat the sysadmin!'});
};

const fetchArticles = async (post) => {
    var params = JSON.stringify(post);
    console.log(params);
    return fetch('/api/article/?q='+params, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    }).then((response) => response.status===200 ? articles2array(response) : []);
};

export { fetchArticles, postArticles };
