document.addEventListener("DOMContentLoaded", () => {
  const checkbox = document.querySelector("#toggle");
  const html = document.querySelector("html");

  const toggleDark = () => {
    checkbox.checked ? html.classList.add("dark") : html.classList.remove("dark");
  };

  checkbox.addEventListener("click", toggleDark);
});
