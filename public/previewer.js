(function () {
  var storageKey = "lean-css-theme";
  var link = document.getElementById("theme-style");
  var select = document.getElementById("css-version");
  if (!link || !select) {
    return;
  }

  var saved = localStorage.getItem(storageKey);
  if (saved) {
    link.href = "/css/" + saved + ".css";
    select.value = saved;
  }

  select.addEventListener("change", function (event) {
    var version = event.target.value;
    link.href = "/css/" + version + ".css";
    localStorage.setItem(storageKey, version);
  });
})();
