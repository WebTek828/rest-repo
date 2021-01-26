//Menu

const listItem = document.querySelector(".menu__lists");
const beverage = document.getElementById("beverage");
const hamburger = document.getElementById("hamburger");
const pizza = document.getElementById("pizza");

const beverageItem = document.getElementById("beverage-item");
const pizzaItem = document.getElementById("pizza-item");
const hamburgerItem = document.getElementById("burger-item");

listItem.addEventListener("click", (e) => {
  const domText = e.target.innerText.toLowerCase();
  if (domText === "beverages") {
    menuPick(
      beverage,
      pizza,
      hamburger,
      beverageItem,
      pizzaItem,
      hamburgerItem
    );
  } else if (domText === "pizza") {
    menuPick(
      pizza,
      beverage,
      hamburger,
      pizzaItem,
      beverageItem,
      hamburgerItem
    );
  } else if (domText === "hamburger") {
    menuPick(
      hamburger,
      pizza,
      beverage,
      hamburgerItem,
      pizzaItem,
      beverageItem
    );
  }
});

function menuPick(first, second, third, firstItem, secondItem, thirdItem) {
  first.classList.add("active");
  second.classList.remove("active");
  third.classList.remove("active");

  firstItem.classList.add("active-item");
  secondItem.classList.remove("active-item");
  thirdItem.classList.remove("active-item");
}

//Testimonial Slider

const right = document.getElementById("right");
const left = document.getElementById("left");

const slideImg = document.querySelectorAll(".testimonial");

const slider = document.querySelector(".slider");

let curImg = 0;
let curSlide = 1;
const width = slider.clientWidth;

slideImg.forEach((s) => {
  s.style.transform = `translate(${width * curImg}px)`;
  curImg++;
});

right.addEventListener("click", moveRight);
left.addEventListener("click", moveLeft);

function moveRight() {
  if (curSlide === slideImg.length) {
    curSlide = 0;
  }
  slider.style.transform = `translate(${-width * curSlide}px)`;
  curSlide++;
}

function moveLeft() {
  curSlide--;
  if (curSlide < 0) {
    curSlide = slideImg.length - 1;
  }
  slider.style.transform = `translate(${-width * curSlide}px)`;
}

//Intersection Observer

//sticky Nav

const features = document.querySelector(".features");
const home = document.querySelector(".home");
const nav = document.querySelector(".nav");

const callBack = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) nav.classList.add("stick");
  else nav.classList.remove("stick");
};

const options = {
  root: null,
  threshold: 0,
};

const observer = new IntersectionObserver(callBack, options);

observer.observe(home);

//revealing sections on scroll

const sections = document.querySelectorAll(".section");

const sectionObserverCallBack = function (entries, observer) {
  const [entry] = entries;
  entry.target.classList.remove("section-hide");
};

const sectionObserver = new IntersectionObserver(sectionObserverCallBack, {
  root: null,
  threshold: 0.2,
});

sections.forEach(function (section) {
  section.classList.add("section-hide");
  sectionObserver.observe(section);
});

//Move From Right Famous Section

const famousSection = document.querySelector(".famous");

const famousObserver = new IntersectionObserver(
  function (entries, observer) {
    const [entry] = entries;
    if (entry.isIntersecting) {
      famousSection.classList.remove("move-from-right");
    }
  },
  { root: null, threshold: 0.1 }
);

famousObserver.observe(famousSection);

//slide from right

const featuresSection = document.querySelector(".features");
const featuresCards = document.querySelector(".features-cards");

const featuresSectionObserver = new IntersectionObserver(
  (entries) => {
    const [entry] = entries;
    console.log(entry);
    if (entry.isIntersecting) {
      featuresCards.classList.add("slide-from-right");
    }
  },
  {
    root: null,
    threshold: 0.6,
  }
);

featuresSectionObserver.observe(featuresSection);

//navbar open
const hamburgerIcon = document.querySelector(".hamburger-icon-container");
const mobileNav = document.querySelector(".mobile-nav");

hamburgerIcon.addEventListener("click", () => {
  const mCls = mobileNav.classList;
  const cls = "show-mobile-nav";
  mCls.contains(cls) ? mCls.remove(cls) : mCls.add(cls);
});
