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

  // Apply CSS custom properties based on mode
  bodyCssProps.set("--background", bodyCssProps.get(`--${mode}-background`));
  bodyCssProps.set("--background2", bodyCssProps.get(`--${mode}-background2`));
  bodyCssProps.set("--background3", bodyCssProps.get(`--${mode}-background3`));
  bodyCssProps.set("--primary", bodyCssProps.get(`--${mode}-primary`));
  bodyCssProps.set("--primary2", bodyCssProps.get(`--${mode}-primary2`));
  bodyCssProps.set("--green", bodyCssProps.get(`--${mode}-green`));
  bodyCssProps.set("--white", bodyCssProps.get(`--${mode}-white`));
  bodyCssProps.set("--button", bodyCssProps.get(`--${mode}-button`));
});


function headerNav() {
  const nav = document.getElementById("headerRight");
  const icon = document.getElementById("menu-icon");

  nav.classList.toggle("responsive");

  if (nav.classList.contains("responsive")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-times");
  } else {
    icon.classList.remove("fa-times");
    icon.classList.add("fa-bars");
  }
}
