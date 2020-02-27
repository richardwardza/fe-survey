import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./App";
import * as serviceWorker from "./serviceWorker";
import { SiteStore } from "./site/SiteStore";
import ApolloClient from "apollo-boost";
import { GRAPHQL_URL } from "./config";

const client = new ApolloClient({
  uri: GRAPHQL_URL
});

const siteStore: SiteStore = new SiteStore(client);

ReactDOM.render(<App siteStore={siteStore} />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
