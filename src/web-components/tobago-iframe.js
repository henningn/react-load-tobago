class TobagoIframe extends HTMLElement {
  connectedCallback() {
    this.insertAdjacentHTML("afterbegin",
        "<iframe class='tobago-iframe' src='http://localhost:8080/'></iframe>");
  }
}

customElements.define('tobago-iframe', TobagoIframe);
