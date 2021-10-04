import { html, css, LitElement } from 'lit';
import "@lrnwebcomponents/simple-icon/lib/simple-icon-lite.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icons.js";

export class Btn extends LitElement {
  

  
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 25px;
        color: var(--button-tag-text-color, #000);
      }
    
.middle{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}
.btn{
  position: relative;
  display: block;
  color: white;
  font-size: 14px;
  font-family: "montserrat";
  text-decoration: none;
  margin: 30px 0;
  border: 2px solid #ff7675;
  padding: 14px 60px;
  text-transform: uppercase;
  overflow: hidden;
  transition: 1s all ease;
}
.btn::before{
  background: #ff7675;
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  z-index: -1;
  transition: all 0.6s ease;
}

.btn1::before{
  width: 0%;
  height: 100%;
}

.btn1:hover::before{
  width: 100%;
}


.btn2::before{
  width: 100%;
  height: 0%;
}
.btn2:hover::before{
  height: 100%;
}

.btn3::before{
  width: 100%;
  height: 0%;
  transform: translate(-50%,-50%) rotate(45deg);
}
.btn3:hover::before{
  height: 380%;
}

.btn4::before{
  width: 100%;
  height: 0%;
  transform: translate(-50%,-50%) rotate(-45deg);
}
.btn4:hover::before{
  height: 380%;
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
    this.title = 'FAQ';
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
