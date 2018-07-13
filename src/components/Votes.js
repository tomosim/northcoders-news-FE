import React, { Component } from "react";

class Votes extends Component {
  state = { votes: { up: 0, down: 0 } };

  handleVote = (article_id, dir) => {
    if (dir === "up") {
      if (this.state.votes.up === 0 && this.state.votes.down === 1) {
        this.props.updateVotes(article_id, dir, this.props.id);
        this.props.updateVotes(article_id, dir, this.props.id);
        this.setState({ votes: { up: 1, down: 0 } });
      } else if (this.state.votes.up === 0) {
        this.props.updateVotes(article_id, dir, this.props.id);
        this.setState({ votes: { up: 1, down: 0 } });
      } else {
        this.props.updateVotes(article_id, "down", this.props.id);
        this.setState({ votes: { up: 0, down: 0 } });
      }
    } else {
      if (this.state.votes.down === 0 && this.state.votes.up === 1) {
        this.props.updateVotes(article_id, dir, this.props.id);
        this.props.updateVotes(article_id, dir, this.props.id);
        this.setState({ votes: { up: 0, down: 1 } });
      } else if (this.state.votes.down === 0) {
        this.props.updateVotes(article_id, dir, this.props.id);
        this.setState({ votes: { up: 0, down: 1 } });
      } else {
        this.props.updateVotes(article_id, "up", this.props.id);
        this.setState({ votes: { up: 0, down: 0 } });
      }
    }
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
