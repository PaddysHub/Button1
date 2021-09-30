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
    font-family: "greygoose-sans",Georgia,Times,Times New Roman,serif;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: .5px;
    line-height: 24px;
    display: inline-block;
    min-height: 50px;
    padding: 12px 35px 12px;
    text-align: center;
    width: 100%;
    margin-right: 8px;
    margin-top: 8px;
    background: transparent;
    border: solid 1px #fff;
    color: #ffffff;
    transition: background-color 1.5s linear;
   }
    button:hover {
      background: white;
      color: #081699;
      cursor: pointer;
      
   }
   
   button:disabled {
    opacity: 20%;
    transition: none;
    cursor: default;
   }
   a:-webkit-any-link {
    color: none;
    cursor: pointer;
}


    `;
    
  }
  

  

  static get properties() {
    return {
      title: { type: String },
      link: { type: String},
      disabled: {type: Boolean, reflect: true },
      icon: {type: Boolean, reflect: true}
    };
  }

  

  constructor() {
    super();
    this.title = 'GG';
    this.link = "";
    this.disabled = false;
    this.icon = false;

  }

  render() {
    return html`
      <a href="${this.link}" tabindex="-1"
        ><button ?disabled="${this.disabled}">
          ${this.title}
           <slot></slot>
        </button>
      </a>
    `;
  }
}
