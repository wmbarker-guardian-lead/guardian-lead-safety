// app.js – handle nav dropdowns + footer year
document.addEventListener("DOMContentLoaded", () => {
  // Dropdown toggle (future-proof if submenus exist)
  const navItems = document.querySelectorAll("nav ul li.has-sub > a");

  navItems.forEach(item => {
    item.addEventListener("click", e => {
      if (item.nextElementSibling && item.nextElementSibling.classList.contains("submenu")) {
        e.preventDefault();
        document.querySelectorAll("nav ul li .submenu.open").forEach(openMenu => {
          if (openMenu !== item.nextElementSibling) {
            openMenu.classList.remove("open");
          }
        });
        item.nextElementSibling.classList.toggle("open");
      }
    });
  });

  // Close if clicked outside
  document.addEventListener("click", e => {
    if (!e.target.closest("nav ul li.has-sub")) {
      document.querySelectorAll("nav ul li .submenu.open").forEach(openMenu => {
        openMenu.classList.remove("open");
      });
    }
  });

  // Footer year
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
