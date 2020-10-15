# React Reddit Pixel

[![npm](https://img.shields.io/npm/dm/react-reddit-pixel.svg)](https://www.npmjs.com/package/react-reddit-pixel)

> React JS wrapper for [Reddit's Pixel](https://advertising.reddithelp.com/en/categories/managing-ads/implementing-reddit-pixel)

Based on [react-facebook-pixel](https://github.com/zsajjad/react-facebook-pixel) by [Zain Sajjad](https://github.com/zsajjad), adapted to Reddit's pixel.

## Install

```
npm install react-reddit-pixel

```

or

```
yarn add react-reddit-pixel

```

## How to use

```js
import RedditPixel from "react-reddit-pixel";

const options = {
  debug: false, // set true to enable logs
};
RedditPixel.init("yourRedditAdvertiserIDGoesHere", options);

RedditPixel.pageVisit(); // For tracking page visit
RedditPixel.track(event); // For tracking standard events, see https://advertising.reddithelp.com/en/categories/managing-ads/implementing-reddit-pixel
RedditPixel.track("Search");
```

**if you're bundling in CI**

```js
  ...
  componentDidMount() {
    const RedditPixel =  require('react-reddit-pixel');
    RedditPixel.init('yourPixelIdGoesHere');
  }
  ...
```

otherwise CI will complain there's no `window`.

## Disable first-party cookies

```js
  ...
  RedditPixel.disableFirstPartyCookies(); // Do this before tracking any events
  RedditPixel.pageVisit();
  ...
```

## Dev Server

```
npm run start

```

Default dev server runs at localhost:8080 in browser.
You can set IP and PORT in webpack.config.dev.js

## Production Bundle

```
npm run bundle
```

### Follow me on Twitter: [@guamhat](https://twitter.com/guamhat)
