/* House safety net: if any photo fails to load (offline, flaky CDN),
   swap in the gold monogram once instead of a broken-image icon.
   Same-origin file, so it passes the site Content-Security-Policy. */
(function () {
  window.addEventListener(
    "error",
    function (e) {
      var t = e.target;
      if (t && t.tagName === "IMG" && !t.dataset.fbk) {
        t.dataset.fbk = "1";
        t.src = "/icons/icon-192.png";
      }
    },
    true
  );
})();
