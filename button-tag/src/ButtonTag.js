import { html, css, LitElement } from 'lit';
import "@lrnwebcomponents/simple-icon/lib/simple-icon-lite.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icons.js";

export class ButtonTag extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 25px;
        color: var(--button-tag-text-color, #000);
      }
    `;
  }

  

  static get properties() {
    return {
      title: { type: String },
      link: { type: String},
      counter: { type: Number },
      disabled: {type: Boolean, reflect: true },
    };
  }

  constructor() {
    super();
    this.title = 'GG';
    this.link = "https://www.greygoose.com/store-locator.html";
    this.disabled = false;
    this.icon = false;

  }


  render() {
    return html`
      <a href="$this.link}" tabindex="-1"
        ><button ?disabled="${this.disabled}">
          <simple-icon-lite icon="${this.icon}"></simple-icon-lite>
          ${this.title}
          <slot></slot>
        </button>
      </a>
    `;
  }
}
