function sticker() {
  window.location.href = "https://t.me/addstickers/meow_krolchonok_z";
}

function palette() {
  const a = document.getElementById("list_c");
  a.style.height = a.style.height === "0px" ? "auto" : "0px";
}

function setColor(color) {
  document.documentElement.style.setProperty("--primarycolor", color);
}

function setCookie(name, value, days = 36500) {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/`;
}

function getCookie(name) {
  const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`));
  return match ? match[2] : null;
}

const addDots = (colors) => {
  const container = document.getElementById("list_c");
  container.innerHTML = "";

  colors.forEach((color) => {
    const dot = document.createElement("span");
    dot.className = "dot";
    dot.style.backgroundColor = color;
    dot.addEventListener("click", () => {
      setColor(color);
      setCookie("themeColor", color);
    });
    container.appendChild(dot);
  });
};

document.addEventListener("DOMContentLoaded", () => {
  const colors = [
    "#5a4545",
    "#5a5745",
    "#495a45",
    "#455a58",
    "#45455a",
    "#5a4555",
  ];
  addDots(colors);

  const savedColor = getCookie("themeColor");
  if (savedColor) setColor(savedColor);

  const currentDomain = window.location.origin;
  document.querySelectorAll("a[href*='ushastoe.ru']").forEach((link) => {
    link.href = link.href.replace("https://ushastoe.ru", currentDomain);
  });
});
