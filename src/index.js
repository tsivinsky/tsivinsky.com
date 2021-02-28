import "./scss/style.scss";

console.log("Hey 👋");

// Redirect russian users to /ru
window.addEventListener("load", () => {
  const lang = navigator.language;

  if (lang === "ru-RU") {
    window.location.href = "/ru";
  } else {
    window.location.href = "/";
  }
});
