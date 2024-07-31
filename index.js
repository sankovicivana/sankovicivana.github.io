const toggle = document.getElementById("toggle");
const toggleDot = document.querySelector(".toggle-dot");
const toggleLine = document.querySelector(".toggle-line");
const html = document.documentElement;

const socialIconsData = [
  {
    link: "https://github.com/sankovicivana",
    iconClass: "fab fa-github",
  },
  {
    link: "mailto:office@classroom.rs",
    iconClass: "fas fa-envelope",
  },
  {
    link: "https://blog.classroom.rs/",
    iconClass: "fas fa-globe",
  },
];

const topLinks = [
  {
    id: "tl-1",
    link: "https://miro.medium.com/v2/resize:fit:2434/1*qan3U0peL-CSdtKaCwKohA.png",
    title: "EXPLORE FRONTEND PATH",
  },
  {
    id: "tl-2",
    link: "https://miro.medium.com/v2/resize:fit:798/0*2jC5-BIaLSHDlFHo.png",
    title: "DISCOVER DEVOPS JOURNEY",
  },
  {
    id: "tl-2",
    link: "https://miro.medium.com/v2/resize:fit:1400/1*dAQJ-UDP3altoQKThbQs_w.jpeg",
    title: "JAVA ROADMAP",
  },
];
const frontend = [
  {
    id: "f-1",
    link: "https://github.com/public-apis/public-apis",
    title: "FREE PUBLIC APIS",
  },
  {
    id: "f-2",
    link: "https://www.blog.classroom.rs/dva-najbolja-nacina-da-centriras-div-u-2023/",
    title: "LEARN HOW TO CENTER DIV 2023",
  },
  {
    id: "f-3",
    link: "https://www.classroom.rs/greske-u-html-dokumentu/",
    title: "AVOID COMMON HTML MISTAKES",
  },
];

const devops = [
  {
    id: "d-1",
    link: "https://www.freecodecamp.org/news/how-to-setup-a-ci-cd-pipeline-with-github-actions-and-aws/",
    title: "SETUP CI/CD PIPELINE WITH GITHUB ACTIONS AND AWS",
  },
];

const readingList = [
  {
    id: "rd-1",
    link: "https://www.classroom.rs/kako-besplatno-hostovati-projekat/",
    title: "HOST FOR FREE ON GITHUB PAGES",
  },
  {
    id: "rd-2",
    link: "https://blog.classroom.rs/clasora-platform/",
    title: "ABOUT CLASORA PLATFORM",
  },
  {
    id: "rd-3",
    link: "https://clasora.com/sr/predavanje",
    title: "CLASORA PLATFORM",
  },
];

function generateCards(
  cards,
  containerSelector,
  bgColorClass,
  headingTitle,
  headingSize = "text-2xl"
) {
  const container = document.querySelector(containerSelector);
  const cardsHTML = cards
    .map(
      (item) => `
      <a href="${item.link}" target="_blank">
      <div class="rounded-xl border border-solid border-gray-300 ${bgColorClass} hover:bg-pink-500 py-4 my-2 text-center cursor-pointer dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <div class="text-indigo-900 hover:text-white text-sm md:text-base dark:text-gray-200 dark:hover:text-white">
          ${item.title}
        </div>
      </div>
    </a>
  `
    )
    .join("");

  let sectionHTML = "";
  if (containerSelector === ".top-links-container") {
    sectionHTML = `
    <h1 class="md:text-4xl text-2xl font-bold text-blue-900 mb-4 dark:text-gray-200">
      ${headingTitle}
    </h1>
    <hr class="bg-gray-500 h-1 md:w-1/2 w-11/12 mx-auto mb-4" />
    ${cardsHTML}
  `;
  } else {
    sectionHTML = `
      <h2 class="text-2xl pt-8 mb-4 font-semibold text-blue-900 dark:text-gray-200">
        ${headingTitle}
      </h2>
      <hr class="bg-gray-500 h-1 w-9/12 mx-auto mb-6" />
      ${cardsHTML}
    `;
  }

  container.innerHTML = sectionHTML;
}

function generateSocialIcons() {
  const socialIconsContainer = document.querySelector(".social-icons");
  const socialIconsHTML = socialIconsData
    .map((item) => {
      return `
        <a href="${item.link}" target="_blank" class="text-pink-500 hover:text-blue-500 mx-2 dark:text-gray-400 dark:hover:text-gray-300">
          <i class="${item.iconClass}"></i>
        </a>
      `;
    })
    .join("");

  socialIconsContainer.innerHTML = socialIconsHTML;
}

(() => {
  generateSocialIcons();
  generateCards(
    topLinks,
    ".top-links-container",
    "bg-indigo-200",
    "Developer Resources Hub"
  );
  generateCards(
    frontend,
    ".frontend-cards-container",
    "bg-indigo-300",
    "Frontend Resources"
  );
  generateCards(
    devops,
    ".devops-cards-container",
    "bg-indigo-400",
    "DevOps Resources"
  );
  generateCards(
    readingList,
    ".reading-cards-container",
    "bg-indigo-300",
    "Add To Your Reading List"
  );
})();

toggle.addEventListener("change", () => {
  const isDarkMode = toggle.checked;
  const darkClass = "dark";
  const translateClass = isDarkMode ? "translate-x-full" : "translate-x-0";
  const bgClass = isDarkMode ? "bg-gray-800" : "bg-gray-300";

  toggleDot.classList.remove("translate-x-0", "translate-x-full");
  toggleDot.classList.add(translateClass);

  toggleLine.classList.remove("bg-gray-300", "bg-gray-800");
  toggleLine.classList.add(bgClass);

  html.classList.toggle(darkClass, isDarkMode);
});
