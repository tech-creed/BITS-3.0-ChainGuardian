const NewsAPI = require("newsapi");

API_KEY = 'ed42509af3e74d1c944417adf9092977'

const newsapi = new NewsAPI(`${API_KEY}`);

const getTopHeadlinesof = (field) => {
  return newsapi.v2.topHeadlines({
    category: field,
    language: "en",
  });
};
const getEverything = (query) => {
  return newsapi.v2.everything({
    q: query,
    language: "en",
  });
};

const Headlines = async (req, res) => {
  const HeadlinesNews = await getTopHeadlinesof("technology");
  return res.json(HeadlinesNews);
};
const CategoryHeadlines = async (req, res) => {
  const categoryNews = await getTopHeadlinesof(req.params["query"]);
  return res.json(categoryNews);
};

const Search = async (req, res) => {
  const searchResult = await getEverything(req.params["query"]);
  return res.json(searchResult);
};

module.exports = { Headlines, CategoryHeadlines, Search };
