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
      
    button {
      background: transparent;
      border: solid 1px #fff;
      color: #ffffff;
      font-family: "greygoose-sans",Georgia,Times,Times New Roman,serif;
      font-size: 16px;
      font-weight: 400;
      letter-spacing: .5px;
      line-height: 24px;
      display: inline-block;
      min-height: 50px;
      padding: 12px 35px 12px;
      text-align: center;
      margin-right: 8px;
      margin-top: 8px;
      text-decoration: none;
   }
    button:hover {
      background: white;
      color: #081699;
      cursor: pointer;
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
    <a href= "https://www.greygoose.com/store-locator.html/" tabindex="-1" class= "button">
        <button ?disabled="${this.disabled}">
    
          <simple-icon-lite icon="Search"></simple-icon-lite>
          ${this.title}
          
          <slot></slot>
        </button>
      </a>
    `;
  }
}
