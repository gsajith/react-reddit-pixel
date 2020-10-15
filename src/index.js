/**
 * React Reddit Pixel Module
 *
 * @package react-reddit-pixel
 * @author Gautham Sajith <gsajith@umich.edu>
 */

//
let initialized = !!window.rdt;
let debug = false;

/**
 * Utilities
 */

/**
 * Warn
 * @param  {...any} args
 */
const warn = (...args) => {
  if (!debug) {
    return;
  }
  // eslint-disable-next-line no-console
  console.info(...["[react-reddit-pixel]"].concat(args));
};

/**
 * Log
 * @param  {...any} args
 */
const log = (...args) => {
  if (!debug) {
    return;
  }
  // eslint-disable-next-line no-console
  console.info(...["[react-reddit-pixel]"].concat(args));
};

const verifyInit = () => {
  if (!initialized) {
    warn(
      "Pixel not initialized before using call RedditPixel.init with required params"
    );
  }
  return initialized;
};

//
const defaultOptions = {
  debug: false,
};

//
export default {
  init(pixelId, options = defaultOptions) {
    /* eslint-disable */
    !(function (w, d, e, v) {
      if (w.rdt) return;
      var p = (w.rdt = function () {
        p.sendEvent
          ? p.sendEvent.apply(p, arguments)
          : p.callQueue.push(arguments);
      });
      p.callQueue = [];
      var t = d.createElement(e);
      t.src = v;
      t.async = !0;
      var s = d.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(window, document, "script", "https://www.redditstatic.com/ads/pixel.js");
    /* eslint-enable */

    if (!pixelId) {
      warn("Please provide Reddit Advertiser ID for initializing");
    } else {
      rdt("init", pixelId); // eslint-disable-line no-undef

      initialized = true;
      debug = options.debug;
    }
  },

  pageVisit() {
    if (!verifyInit()) {
      return;
    }

    rdt("track", "PageVisit"); // eslint-disable-line no-undef

    if (debug) {
      log("called rdt('track', 'PageVisit');");
    }
  },

  track(event) {
    if (!verifyInit()) {
      return;
    }

    rdt("track", event); // eslint-disable-line no-undef

    if (debug) {
      log(`called rdt('track', '${event}');`);
    }
  },

  rdt(...args) {
    if (!verifyInit()) {
      return;
    }

    rdt(...args); // eslint-disable-line no-undef

    if (debug) {
      log(`called rdt('${args.slice(0, 2).join("', '")}')`);

      if (args[2]) {
        log("with data", args[2]);
      }
    }
  },
};
