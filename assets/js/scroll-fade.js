(function () {
  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var selector = [
    ".sidebar > div[itemscope]",
    ".page__content > *",
    ".portfolio-intro",
    ".portfolio-grid .list__item",
    ".repo-intro",
    ".repo-toolbar",
    ".repo-filter-pills",
    ".repo-status",
    ".repo-card"
  ].join(",");

  function ready(callback) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", callback);
    } else {
      callback();
    }
  }

  ready(function () {
    var observed = new WeakSet();

    function revealImmediately(element) {
      element.classList.add("scroll-fade", "is-visible");
    }

    if (reducedMotion || !("IntersectionObserver" in window)) {
      document.querySelectorAll(selector).forEach(revealImmediately);
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        entry.target.classList.toggle("is-visible", entry.isIntersecting);
      });
    }, {
      rootMargin: "0px 0px -8% 0px",
      threshold: 0.08
    });

    function observeElement(element, index) {
      if (observed.has(element)) {
        return;
      }

      observed.add(element);
      element.classList.add("scroll-fade");
      element.style.setProperty("--scroll-fade-delay", Math.min(index * 24, 120) + "ms");
      observer.observe(element);
    }

    function observePage() {
      document.querySelectorAll(selector).forEach(observeElement);
    }

    observePage();

    var mutationObserver = new MutationObserver(observePage);
    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true
    });
  });
}());
