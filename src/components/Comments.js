import React, { Component } from "react";
import * as api from "../api";
import Votes from "./Votes";
import PostComment from "./PostComment.js";
import menuButton from "../assets/menu.png";

class Comments extends Component {
  state = { comments: [], clicked: [], lastClick: "" };

  componentDidMount() {
    this.fetchComments();
    this.setState({ clicked: [] });
  }

  componentWillMount() {
    document.addEventListener("click", this.handleOutsideClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.handleOutsideClick, false);
  }

  fetchComments = () => {
    api
      .fetchCommentsByArticle(this.props.article_id)
      .then(comments => this.setState({ comments: comments }));
  };

  updateVotes = (_id, dir, type) => {
    api.vote(_id, dir, type).then(() => {
      this.fetchComments();
    });
    const updatedCommentIndex = this.state.comments.findIndex(
      comment => comment._id === _id
    );

    const updatedCommentList = [...this.state.comments];

    dir === "up"
      ? (updatedCommentList[updatedCommentIndex] = {
          ...updatedCommentList[updatedCommentIndex],
          votes: updatedCommentList[updatedCommentIndex].votes + 1
        })
      : (updatedCommentList[updatedCommentIndex] = {
          ...updatedCommentList[updatedCommentIndex],
          votes: updatedCommentList[updatedCommentIndex].votes - 1
        });

    this.setState({ comments: [...updatedCommentList] });
  };

  handleMenuClick(index, e) {
    let clicked = this.state.clicked;
    clicked[index] = !clicked[index];
    this.setState({ clicked: clicked, lastClick: index });
  }

  handleOutsideClick = event => {
    if (event.target.className !== "menuButton") {
      this.setState({ clicked: [] });
    }
  };

  postComment = newComment => {
    api.postNewComment(this.props.article_id, newComment).then(comment => {
      this.setState({ comments: [comment, ...this.state.comments] });
    });
  };

  deleteComment = commentId => {
    api
      .deleteComment(commentId)
      .then(alert("comment deleted"))
      .then(() => this.fetchComments());
  };

  render() {
    return (
      <div id="comments">
        <h2>Comments:</h2>
        <PostComment
          article_id={this.props.article_id}
          currentUser={this.props.currentUser}
          postComment={this.postComment}
        />
        {this.state.comments.map((comment, index) => (
          <div key={comment._id} className="commentCard">
            <Votes
              articleId={comment._id}
              votes={comment.votes}
              id="comments"
              updateVotes={this.updateVotes}
            />
            <h4 className="userAndTopic">{comment.created_by.username}</h4>
            <div className="menuBarItem">
              <img
                src={menuButton}
                className={"menuButton"}
                alt="menu button"
                onClick={() => this.handleMenuClick(index)}
                key={index}
              />
              <a
                className={`dropdownContent ${this.state.clicked[index]}`}
                onClick={() => this.deleteComment(comment._id)}
              >
                delete
              </a>
            </div>
            <p>{comment.body}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Comments;
