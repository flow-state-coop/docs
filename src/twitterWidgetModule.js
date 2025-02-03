import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";

/* 
 * Reloads the widget on every route change becuase when loading by using
 * docusaurus.config.js the script is not executed on client side navigation.
 */
export function onRouteUpdate({ location }) {
  if (!ExecutionEnvironment.canUseDOM) {
    return null;
  }

  window.twttr = (function (d, s, id) {
    var js,
      fjs = d.getElementsByTagName(s)[0],
      t = window.twttr || {};
    var x = d.getElementById(id);
    if (x) x.remove();
    js = d.createElement(s);
    js.id = id;
    js.src = "https://platform.twitter.com/widgets.js";
    fjs.parentNode.insertBefore(js, fjs);

    t._e = [];
    t.ready = function (f) {
      t._e.push(f);
    };

    return t;
  })(document, "script", "twitter-wjs");
}
