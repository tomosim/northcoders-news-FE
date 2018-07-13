import React, { Component } from "react";
import * as api from "../api";
import Votes from "./Votes";
import Comments from "./Comments";

class Article extends Component {
  state = { article: {} };

  componentDidMount() {
    this.fetchArticle();
  }

  fetchArticle = () => {
    api
      .fetchArticleById(this.props.match.params.article_id)
      .then(article => this.setState({ article: article }));
  };

  render() {
    return (
      <div id="articleListBlock">
        <div id="articleContainer">
          <div id="articleCard">
            <Votes
              articleId={this.state.article._id}
              votes={this.state.article.votes}
              id="articles"
              updateVotes={this.updateVotes}
            />
            <div>
              <h2 id="articleTitle">{this.state.article.title}</h2>
              <div className="userAndTopic">
                <h4>
                  {this.state.article.created_by
                    ? this.state.article.created_by.username
                    : null}
                  {"   //   "}
                  {this.state.article.belongs_to}
                </h4>
              </div>
            </div>
            <div id="articleBody">
              <p>{this.state.article.body}</p>
            </div>
          </div>
          <Comments
            currentUser={this.props.currentUser}
            article_id={this.props.match.params.article_id}
          />
        </div>
      </div>
    );
  }
}

export default Article;
