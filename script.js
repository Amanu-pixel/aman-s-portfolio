const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("portfolio-theme");
  if (savedTheme === "light") {
    body.classList.add("light-mode");
    toggleBtn.textContent = "🌙 Dark Mode";
  }
});

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("light-mode");
  if (body.classList.contains("light-mode")) {
    localStorage.setItem("portfolio-theme", "light");
    toggleBtn.textContent = "🌙 Dark Mode";
  } else {
    localStorage.setItem("portfolio-theme", "dark");
    toggleBtn.textContent = "☀️ Light Mode";
  }
});
