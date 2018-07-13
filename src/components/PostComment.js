import React, { Component } from "react";

class PostComment extends Component {
  state = {
    comment: {
      votes: 0,
      body: "",
      created_by: this.props.currentUser,
      created_at: Date.now(),
      belongs_to: this.props.article_id
    }
  };

  handleInput = e => {
    this.setState({ comment: { ...this.state.comment, body: e.target.value } });
  };

  handleClick = () => {
    this.props.postComment(this.state.comment);
    this.setState({
      comment: {
        ...this.state.comment,
        body: ""
      }
    });
  };

  handleKeyPress = e => {
    e.key === "Enter" ? this.handleClick() : null;
  };

  render() {
    return (
      <div className="postCard">
        <input
          id="commentInput"
          placeholder="post new comment"
          value={this.state.comment.body}
          onChange={this.handleInput}
          onKeyUp={this.handleKeyPress}
        />
        <div id="submitComment" onClick={this.handleClick}>
          SEND
        </div>
      </div>
    );
  }
}

export default PostComment;
