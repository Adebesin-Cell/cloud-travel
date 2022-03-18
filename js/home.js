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

const searchBtn = document.querySelector(".search");
const searchMenu = document.querySelector(".menu");
const searchMenuCloseBtn = document.querySelector(".menu__icon--close");
const body = document.querySelector("body");

searchBtn.addEventListener("click", function (e) {
  searchMenu.classList.remove("menu--hidden");
  body.classList.add("no-scroll");
});

searchMenuCloseBtn.addEventListener("click", function (e) {
  searchMenu.classList.add("menu--hidden");
  body.classList.remove("no-scroll");
});

const filterBtn = document.querySelector(".filter__button--open");
const filterMenu = document.querySelector(".filter-menu");
const filterMenuCloseBtn = document.querySelector(".filter-menu__icon--close");

filterBtn.addEventListener("click", function (e) {
  filterMenu.classList.remove("filter-menu--hidden");
  body.classList.add("no-scroll");
});

filterMenuCloseBtn.addEventListener("click", function (e) {
  filterMenu.classList.add("filter-menu--hidden");
  body.classList.remove("no-scroll");
});

const selectField = document.querySelector(".select__field");
const selectInput = document.querySelector(".select__input");
const options = document.querySelectorAll(".select__item");
const selectList = document.querySelector(".select__list");
const selectIcon = document.querySelector(".select__field .icon svg");

selectInput.blur();

selectField.addEventListener("click", function () {
  selectList.classList.toggle("hidden");
  selectIcon.classList.toggle("rotate");
  selectInput.blur();
});

options.forEach((option) => {
  option.addEventListener("click", function (e) {
    selectInput.value = this.textContent;
    selectList.classList.toggle("hidden");
    selectIcon.classList.toggle("rotate");
    selectInput.blur();
  });
});
