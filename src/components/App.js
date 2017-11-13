import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Homepage from "./Homepage";
import EachArticle from "./EachArticle";
import Topics from "./Topics";
import ArticlesByTopic from "./ArticlesByTopic";
import Topic from "./Topics";

import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Welcome to React</h1>
            <ul>
              <Topic />
            </ul>
          </header>
          <br />
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/topics" component={Topics} />
            <Route exact path="/articles/:id" component={EachArticle} />
            <Route
              exact
              path="/topics/:topic/articles"
              component={ArticlesByTopic}
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
