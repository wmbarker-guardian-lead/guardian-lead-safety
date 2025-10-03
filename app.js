// app.js – handles interactive nav + mobile dropdowns

document.addEventListener("DOMContentLoaded", () => {
  // Handle dropdowns on mobile
  const navItems = document.querySelectorAll("nav ul li.has-sub > a.link");

  navItems.forEach(item => {
    item.addEventListener("click", e => {
      // Prevent link from following if submenu exists
      if (item.nextElementSibling && item.nextElementSibling.classList.contains("submenu")) {
        e.preventDefault();

        // Close all other open menus
        document.querySelectorAll("nav ul li .submenu.open").forEach(openMenu => {
          if (openMenu !== item.nextElementSibling) {
            openMenu.classList.remove("open");
          }
        });

        // Toggle this one
        item.nextElementSibling.classList.toggle("open");
      }
    });
  });

  // Close menus if clicked outside
  document.addEventListener("click", e => {
    if (!e.target.closest("nav ul li.has-sub")) {
      document.querySelectorAll("nav ul li .submenu.open").forEach(openMenu => {
        openMenu.classList.remove("open");
      });
    }
  });

  // Footer year auto-update
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});
