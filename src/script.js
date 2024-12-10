const menuBtn = document.getElementById("bars");
const closeBtn = document.getElementById("close");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
  menu.classList.remove("hidden");
  menu.classList.add("show");
});

closeBtn.addEventListener("click", () => {
  menu.classList.remove("show");
  menu.classList.add("hidden");
});
