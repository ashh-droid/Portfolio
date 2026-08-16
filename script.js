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

/* Keep the web-readable resume aligned with the latest final PDF resume. */
const resumeHeroCopy = document.querySelector('.resume-hero > div > p:not(.eyebrow)');
if (resumeHeroCopy) {
  resumeHeroCopy.textContent = 'Computer Science and Engineering graduate with internship and project experience in full-stack development, AI workflows, cloud deployment and cybersecurity.';
}

document.querySelectorAll('.resume-block').forEach((block) => {
  const heading = block.querySelector('h2');
  if (!heading) return;

  if (heading.textContent.trim() === 'Summary') {
    const paragraph = block.querySelector('p');
    if (paragraph) {
      paragraph.textContent = 'Computer Science and Engineering graduate with internship and project experience in full-stack development, AI workflows, cloud deployment and cybersecurity. Skilled in Python, TypeScript, Next.js, Django, GraphQL, PostgreSQL, Docker and Kubernetes.';
    }
  }

  if (heading.textContent.trim() === 'Experience') {
    const bullets = block.querySelectorAll('li');
    if (bullets.length >= 2) {
      bullets[0].textContent = 'Contributed to backend modules and REST API development using Python, Django and MySQL.';
      bullets[1].textContent = 'Supported debugging, testing and feature implementation in collaboration with the development team.';
    }
  }
});

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
