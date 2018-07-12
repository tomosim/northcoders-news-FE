import React, { Component } from "react";

class Votes extends Component {
  state = { voted: "" };

  handleVote = (article_id, dir) => {
    this.props.updateVotes(article_id, dir, this.props.id);
  };

  render() {
    return (
      <div className="votes">
        <h4
          className="voteButton"
          id="up"
          onClick={e => this.handleVote(this.props.article._id, e.target.id)}
        >
          ▲
        </h4>
        <div className="voteNumber">{this.props.article.votes}</div>
        <h4
          className="voteButton"
          id="down"
          onClick={e => this.handleVote(this.props.article._id, e.target.id)}
        >
          ▼
        </h4>
      </div>
    );
  }
}

export default Votes;
