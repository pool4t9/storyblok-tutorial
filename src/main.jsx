import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { storyblokInit, apiPlugin } from "@storyblok/react";

import Page from "./components/Page";
import Teaser from "./components/Teaser";
import Grid from "./components/Grid";
import Feature from "./components/Feature";
import Global from './components/Layout/Global'
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Layout/Header";
import NavigationItem from "./components/Layout/NavigationItem";
import ImageLink from "./components/ImageLink/ImageLink";
import BannerSummary from "./components/BannerSummary/BannerSummary";

storyblokInit({
  accessToken: "jRcGHhWPyaWy2GY5CPcLkgtt",
  use: [apiPlugin],
  components: {
    page: Page,
    teaser: Teaser,
    grid: Grid,
    feature: Feature,
    global: Global,
    header: Header,
    navigation_item: NavigationItem,
    image_link: ImageLink,
    banner_summary: BannerSummary
  },
  apiOptions: {
    region: 'eu'
  }
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter basename='/'>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);
