import React, { Component } from "react";
import * as api from "../api";
import { NavLink } from "react-router-dom";

class Sidebar extends Component {
  state = { topics: [] };

  componentDidMount() {
    this.fetchTopics();
  }

  fetchTopics = () => {
    api.fetchAllTopics().then(topics => this.setState({ topics: topics }));
  };

  render() {
    return (
      <div className="sidebar">
        <NavLink to={"/"} className="topicButton">
          <div>
            <h2>HOME</h2>
          </div>
        </NavLink>
        {this.state.topics.map(topic => {
          return (
            <NavLink
              to={`/topic/${topic.slug}`}
              className="topicButton"
              key={topic.slug}
            >
              <div>
                <h2>{topic.title.toUpperCase()}</h2>
              </div>
            </NavLink>
          );
        })}
      </div>
    );
  }
}

export default Sidebar;
