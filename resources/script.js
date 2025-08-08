class CssPropControl {
  constructor(element) {
    this.element = element;
  }
  get(varName) {
    return getComputedStyle(this.element).getPropertyValue(varName);
  }
  set(varName, val) {
    return this.element.style.setProperty(varName, val);
  }
}

const bodyCssProps = new CssPropControl(document.body);

let toggle = document.querySelector("#dark-mode-toggle");
let label = document.querySelector("#mode-label"); 

toggle.addEventListener("click", () => {
  let mode = toggle.checked ? "light" : "dark";

  // Update label text
  label.textContent = toggle.checked ? "Dark Mode" : "Light Mode";

  // Apply CSS custom colour properties based on mode
  bodyCssProps.set("--background", bodyCssProps.get(`--${mode}-background`));
  bodyCssProps.set("--background2", bodyCssProps.get(`--${mode}-background2`));
  bodyCssProps.set("--background3", bodyCssProps.get(`--${mode}-background3`));
  bodyCssProps.set("--primary", bodyCssProps.get(`--${mode}-primary`));
  bodyCssProps.set("--primary2", bodyCssProps.get(`--${mode}-primary2`));
  bodyCssProps.set("--green", bodyCssProps.get(`--${mode}-green`));
  bodyCssProps.set("--white", bodyCssProps.get(`--${mode}-white`));
  bodyCssProps.set("--button", bodyCssProps.get(`--${mode}-button`));
});

// Hamburger menu
  function headerNav() {
    const links = document.querySelector('.links');
    links.classList.toggle('show-links');
  }

// Carousel
document.addEventListener("DOMContentLoaded", () => {
  const projects = document.querySelectorAll(".project");
  const container = document.querySelector(".project-container");
  const prevBtn = document.querySelector(".carousel-btn.prev");
  const nextBtn = document.querySelector(".carousel-btn.next");

  let currentIndex = 0;

  function updateCarousel() {
    const slideWidth = projects[0].offsetWidth;
    const offset = -currentIndex * slideWidth;
    container.style.transform = `translateX(${offset}px)`;
  }

  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + projects.length) % projects.length;
    updateCarousel();
  });

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % projects.length;
    updateCarousel();
  });

  // === Init ===
  updateCarousel();
});