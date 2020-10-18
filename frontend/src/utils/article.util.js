import { Practices, SupportRate } from "variables/general";

const articles2array = async (articles, idx) => {
  if (idx === undefined) {
    idx = 1;
  }
  const data = await articles.json();
  console.log(data);
  const convertedData = data.map((row, index) => convert(idx, row, index));
  console.log(convertedData);
  return convertedData;
};

const convert = (idx, row, index) => {
  const record = [];
  record.push(`${idx + index}`);
  record.push(row.author);
  record.push(row.title);
  record.push(`${row.yearPublished}`);
  record.push(row.doi);
  record.push(row.abstract);
  record.push(Practices.get(row.practice));
  //  record.push(row['claims'].map((r)=> Claims[row['practice']].get(r)).join(","));
  record.push(SupportRate.get(row.supportRating));
  return record;
};

//
const postArticles = async (post) =>
  fetch("/api/article", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post),
  }).then((response) =>
    response.status === 200
      ? { retCode: 0, retMsg: "A record was created successfully!" }
      : {
          retCode: -1,
          retMsg: "Some error happened, please concat the sysadmin!",
        }
  );

const fetchArticles = async (post) => {
  const params = JSON.stringify(post);
  console.log(params);
  return fetch(`/api/article/?q=${params}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) =>
    response.status === 200 ? articles2array(response) : []
  );
};

export { fetchArticles, postArticles };
