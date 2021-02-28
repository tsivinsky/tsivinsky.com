import "./scss/style.scss";

console.log("Hey 👋");

// Redirect russian users to /ru
window.addEventListener("load", () => {
  const lang = navigator.language;

  if (lang === "ru-RU" && !location.pathname.includes("/ru")) {
    location.href = "/ru";
  }
});
