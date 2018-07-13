import React, { Component } from "react";
import ArticleList from "./components/ArticleList";
import Topics from "./components/Topics";
import Article from "./components/Article";
import { Route, Link } from "react-router-dom";
import "./App.css";
import logo from "./assets/logo_orange.png";

class App extends Component {
  state = {
    currentUser: { _id: "5b1a41b59fc0cc849fb96b53", username: "tickle122" }
  };
  render() {
    return (
      <div className="App">
        <header id="header">
          <Link to="/">
            <img src={logo} alt="northcoders logo" id="logo" />
          </Link>
          <h1 className="title">{"<NC NEWS />"}</h1>
          <div id="loginRegisterButtons">
            <button>login</button>
            <button>register</button>
          </div>
        </header>

        <Route exact path="/" render={() => <ArticleList />} />
        <Route path="/topic/:topicslug" component={ArticleList} />
        <Route
          path="/article/:article_id"
          render={props => (
            <Article {...props} currentUser={this.state.currentUser} />
          )}
        />
        <div>
          <Topics />
        </div>
      </div>
    );
  }
}

export default App;
