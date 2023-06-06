class MyElement extends HTMLElement {
  #elementName;

  get elementName() {
    return this.#elementName;
  }

  set elementName(val) {
    if (val === this.#elementName) {
      return;
    }

    this.#elementName = val;

    if (this.dataset.elementName !== val) {
      this.dataset.elementName = val;
    }
  }

  constructor() {
    super();
  }

  connectedCallback() {
    if (this.getAttribute("is-rendered") === "true") {
      return;
    }

    if (Object.keys(this.dataset).length) {
      this.elementName = this.dataset.elementName;
    }

    this.setAttribute("is-rendered", "true");
    this.innerHTML = this.HTML;
  }

  get HTML() {
    if (this.elementName) {
      return `
    <section class="periodic-table-element element ${this.elementName.toLowerCase()}">
      <h2>${this.elementName}</h2>
    </section>
    `;
    } else {
      return "";
    }
  }
}

if (!customElements.get("my-element")) {
  customElements.define("my-element", MyElement);
}
