import React, { Component } from "react";
import * as api from "../api";
import { Link } from "react-router-dom";
import Votes from "./Votes";

class ArticleList extends Component {
  state = {
    articles: []
  };

  componentDidMount() {
    this.fetchArticles();
  }

  componentDidUpdate(prevProps) {
    this.props.match
      ? prevProps.match.params !== this.props.match.params
        ? this.fetchArticles()
        : null
      : null;
  }

  fetchArticles = async () => {
    const articles = this.props.match
      ? await api.fetchArticlesByTopic(this.props.match.params.topicslug)
      : await api.fetchAllArticles();
    this.setState({ articles: articles });
  };

  render() {
    return (
      <div id="articleListBlock">
        <div id="articleListContainer">
          {this.state.articles.map(article => (
            <div className="articleCard" key={article._id}>
              <Votes
                articleId={article._id}
                votes={article.votes}
                id="articles"
              />
              <Link to={`/article/${article._id}`} className="articleTitle">
                <h2 className="listCardTitles">{article.title}</h2>
              </Link>
              <div className="userAndTopic">
                <h4>comments: {article.comments}</h4>
                <h4>
                  {article.created_by}
                  {" // "}
                  {article.belongs_to}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default ArticleList;
