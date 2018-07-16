import React, { Component } from "react";
import * as api from "../api";

class Votes extends Component {
  state = { voteColour: { up: "", down: "" }, votes: { up: 0, down: 0 } };

  handleVote = (article_id, dir) => {
    if (dir === "up") {
      if (this.state.votes.up === 0 && this.state.votes.down === 1) {
        this.updateVotes(article_id, dir, this.props.id);
        this.updateVotes(article_id, dir, this.props.id);
        this.setState({
          votes: { up: 1, down: 0 },
          voteColour: { up: "blue", down: "" }
        });
      } else if (this.state.votes.up === 0) {
        this.updateVotes(article_id, dir, this.props.id);
        this.setState({
          votes: { up: 1, down: 0 },
          voteColour: { up: "blue", down: "" }
        });
      } else {
        this.updateVotes(article_id, "down", this.props.id);
        this.setState({
          votes: { up: 0, down: 0 },
          voteColour: { up: "", down: "" }
        });
      }
    } else {
      if (this.state.votes.down === 0 && this.state.votes.up === 1) {
        this.updateVotes(article_id, dir, this.props.id);
        this.updateVotes(article_id, dir, this.props.id);
        this.setState({
          votes: { up: 0, down: 1 },
          voteColour: { up: "", down: "red" }
        });
      } else if (this.state.votes.down === 0) {
        this.updateVotes(article_id, dir, this.props.id);
        this.setState({
          votes: { up: 0, down: 1 },
          voteColour: { up: "", down: "red" }
        });
      } else {
        this.updateVotes(article_id, "up", this.props.id);
        this.setState({
          votes: { up: 0, down: 0 },
          voteColour: { up: "", down: "" }
        });
      }
    }
  };

  updateVotes = (_id, dir, type) => {
    api.vote(_id, dir, type);
  };

  render() {
    const addition = this.state.votes.up ? 1 : this.state.votes.down ? -1 : 0;
    return (
      <div className="votes">
        <h4
          className="voteButton"
          id={`up${this.state.voteColour.up}`}
          onClick={e => this.handleVote(this.props.articleId, "up")}
        >
          ▲
        </h4>
        <div className="voteNumber">{this.props.votes + addition}</div>
        <h4
          className="voteButton"
          id={`down${this.state.voteColour.down}`}
          onClick={e => this.handleVote(this.props.articleId, "down")}
        >
          ▼
        </h4>
      </div>
    );
  }
}

export default Votes;
