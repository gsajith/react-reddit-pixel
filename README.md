# React Reddit Pixel

[![npm](https://img.shields.io/npm/dw/react-reddit-pixel?style=flat-square)](https://www.npmjs.com/package/react-reddit-pixel)

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
import RedditPixel from 'react-reddit-pixel';

const options = {
  debug: false, // set true to enable logs
};
RedditPixel.init('yourRedditAdvertiserIDGoesHere', options);

RedditPixel.pageVisit(); // For tracking page visit
RedditPixel.track(event); // For tracking standard events, see https://advertising.reddithelp.com/en/categories/managing-ads/implementing-reddit-pixel#N1
RedditPixel.track('Search');
RedditPixel.rdt(...args); // For tracking custom events, though Reddit currently doesn't list support for this in their documentation
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

## Standard Event Types

See the full list here: [Event Types](https://advertising.reddithelp.com/en/categories/managing-ads/implementing-reddit-pixel);

| Event Name    | Description                                                                                                          | Code                                |
| ------------- | -------------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| PageVisit     | Default event in the conversion pixel <br>that will track that the user has <br>visited one of the advertiser’s page | RedditPixel.pageVisit();            |
| ViewContent   | User view a particular content on a page                                                                             | RedditPixel.track("ViewContent");   |
| Search        | User performed a search query                                                                                        | RedditPixel.track("Search");        |
| AddToCart     | User added a product to the shopping cart                                                                            | RedditPixel.track("AddToCart");     |
| AddToWishlist | User added a product to wishlist                                                                                     | RedditPixel.track("AddToWishlist"); |
| Purchase      | User completed the purchase                                                                                          | RedditPixel.track("Purchase");      |
| Lead          | When user submits information expressing <br>interest in the advertised product/offer                                | RedditPixel.track("Lead");          |
| SignUp        | User completed registration form or sign up<br>for a new service                                                     | RedditPixel.track("SignUp");        |

> :warning: **Note**: Event names are **case-sensitive**! :warning:

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
