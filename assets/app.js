// Guardian Lead Safety — minimal JS
(function () {
  // copyright year
  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

  // touch-friendly submenu toggle
  document.querySelectorAll("li.has-sub > a.link").forEach(function (link) {
    link.addEventListener("click", function (e) {
      // enable tap-to-toggle on mobile without navigating
      if (window.matchMedia("(max-width: 860px)").matches) {
        e.preventDefault();
        var menu = link.parentElement.querySelector(".submenu");
        if (menu) {
          var open = menu.style.display === "block";
          document.querySelectorAll("nav .submenu").forEach(function (m) { m.style.display = "none"; });
          menu.style.display = open ? "none" : "block";
        }
      }
    });
  });

  // close submenus on outside click (mobile)
  document.addEventListener("click", function (e) {
    if (!e.target.closest("nav")) {
      document.querySelectorAll("nav .submenu").forEach(function (m) { m.style.display = "none"; });
    }
  });
})();
