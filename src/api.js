import axios from "axios";

const URL = "https://toms-northcoders-news.herokuapp.com/api";

export const fetchAllArticles = () => {
  return axios.get(`${URL}/articles`).then(res => res.data.articles);
};

export const fetchAllTopics = () => {
  return axios.get(`${URL}/topics`).then(res => res.data.topics);
};

export const fetchArticlesByTopic = topicSlug => {
  return axios
    .get(`${URL}/topics/${topicSlug}/articles`)
    .then(res => res.data.articles);
};

export const fetchArticleById = article_id => {
  return axios
    .get(`${URL}/articles/${article_id}`)
    .then(res => res.data.article);
};

export const fetchCommentsByArticle = article_id => {
  return axios
    .get(`${URL}/articles/${article_id}/comments`)
    .then(res => res.data.comments);
};

export const vote = (article_id, direction, type) => {
  return axios
    .put(`${URL}/${type}/${article_id}?vote=${direction}`)
    .then(res => res.data.article);
};

export const postNewComment = (article_id, newComment) => {
  return axios
    .post(`${URL}/articles/${article_id}/comments`, newComment)
    .then(res => res.data);
};

export const deleteComment = comment_id => {
  return axios
    .delete(`${URL}/comments/${comment_id}`)
    .then(res => console.log(res));
};

export const fetchAllUsers = () => {
  return axios.get(`${URL}/users`).then(res => res.data);
};
