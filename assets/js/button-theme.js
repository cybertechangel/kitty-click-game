const toggleBtn = document.getElementById("button-theme");

function updateIcon(isDark) {
  const icon = toggleBtn.querySelector("i");

  if (isDark) {
    icon.className = "bi bi-sun";
    toggleBtn.onmouseover = () => icon.className = "bi bi-sun-fill";
    toggleBtn.onmouseout = () => icon.className = "bi bi-sun";
  } else {
    icon.className = "bi bi-moon";
    toggleBtn.onmouseover = () => icon.className = "bi bi-moon-fill";
    toggleBtn.onmouseout = () => icon.className = "bi bi-moon";
  }
}

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  const isDark = document.body.classList.contains("dark-mode");
  updateIcon(isDark);
});

window.addEventListener("DOMContentLoaded", () => {
  const isDark = document.body.classList.contains("dark-mode");
  updateIcon(isDark);
});