import React from "react";
import ReactDOM from "react-dom";
import RedditPixel from "../src/index";

RedditPixel.init("reddit_advertiser_id", { debug: true });
RedditPixel.pageVisit();
RedditPixel.rdt("track", "PageVisit"); // Same as RedditPixel.pageVisit();

ReactDOM.render(
  <div>
    <h1>React Reddit Pixel Test</h1>
    <button type="button" onClick={() => RedditPixel.track("ViewContent")}>
      Track View Content
    </button>
  </div>,
  document.getElementById("app")
);
