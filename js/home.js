const showMoreButton = document.querySelector(".meal__list .show-more");
const showLessButton = document.querySelector(".meal__list .show-less");
const extendedList = document.querySelector(".meal__list--extended");

const showMoreButton2 = document.querySelector(".property__list .show-more");
const showLessButton2 = document.querySelector(".property__list .show-less");
const extendedList2 = document.querySelector(".property__list--extended");

showMoreButton.addEventListener("click", function (e) {
  extendedList.classList.remove("meal__list--hidden");
  showMoreButton.style.display = "none";
});

showLessButton.addEventListener("click", function (e) {
  extendedList.classList.add("meal__list--hidden");
  showMoreButton.style.display = "flex";
});

showMoreButton2.addEventListener("click", function (e) {
  extendedList2.classList.remove("property__list--hidden");
  showMoreButton2.style.display = "none";
});

showLessButton2.addEventListener("click", function (e) {
  extendedList2.classList.add("property__list--hidden");
  showMoreButton2.style.display = "flex";
});

const sectionBody = document.querySelector(".header");
const searchBox = document.querySelector(".section-search-bar");

const headerHeight = searchBox.getBoundingClientRect().height;
console.log(headerHeight);

const stickyNav = function (entries) {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) {
    searchBox.classList.add("fixed");
  } else {
    searchBox.classList.remove("fixed");
  }
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0.1,
  rootMargin: `${headerHeight}px`,
});

headerObserver.observe(sectionBody);

const btnScrollTo = Array.from(document.querySelectorAll(".scroll-to-top"));
const header = document.querySelector(".header");

btnScrollTo.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    console.log("hello");
    header.scrollIntoView({ behavior: "smooth" });
  });
});
