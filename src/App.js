import React, { Component } from "react";
import ArticleList from "./components/ArticleList";
import Topics from "./components/Topics";
import Article from "./components/Article";
import FourOhFour from "./components/FourOhFour";
import Users from "./components/Users";
import { Route, Link, Switch } from "react-router-dom";
import "./App.css";
import logo from "./assets/logo_orange.png";
import MyContext from "./Context";

class App extends Component {
  render() {
    return (
      <MyContext.Provider
        value={{
          _id: "5b1a41b59fc0cc849fb96b53",
          username: "tickle122"
        }}
      >
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
          <Switch>
            <Route exact path="/topic/:topicslug" component={ArticleList} />
            <Route path="/article/:article_id" component={Article} />
            <Route path="/404" component={FourOhFour} />
            <Route exact path="/" component={ArticleList} />
            <Route path="/*" component={FourOhFour} />
          </Switch>

          <div>
            <Topics />
          </div>
        </div>
      </MyContext.Provider>
    );
  }
}

export default App;
