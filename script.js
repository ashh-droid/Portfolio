const themeColor = "#4e7350";
const themeMetas = document.querySelectorAll('meta[name="theme-color"]');
if (themeMetas.length) {
  themeMetas.forEach((meta) => meta.setAttribute("content", themeColor));
} else {
  const themeMeta = document.createElement("meta");
  themeMeta.name = "theme-color";
  themeMeta.content = themeColor;
  document.head.appendChild(themeMeta);
}

document.querySelectorAll("[data-current-year]").forEach((element) => {
  element.textContent = String(new Date().getFullYear());
});

const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector("#site-nav");

if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isOpen));
    navigation.classList.toggle("is-open", !isOpen);
  });

  navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menuButton.setAttribute("aria-expanded", "false");
      navigation.classList.remove("is-open");
    });
  });
}

document.querySelectorAll("[data-print]").forEach((button) => {
  button.addEventListener("click", () => window.print());
});
