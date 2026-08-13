document.addEventListener("DOMContentLoaded", () => {
  const checkbox = document.querySelector("#toggle");
  const html = document.querySelector("html");
  const hour = new Date().getHours();

  const toggleDark = () => {
    checkbox.checked ? html.classList.add("dark") : html.classList.remove("dark");
  };

  const autoTheme = () => {
    if (hour >= 23 || hour <= 7) {
      checkbox.checked = true;
      html.classList.add("dark");
    } else {
      checkbox.checked = false;
      html.classList.remove("dark");
    }
  };

  autoTheme();
  checkbox.addEventListener("click", toggleDark);
});
