class AppCard extends HTMLElement {

    static get observedAttributes() {
        return ['my-attr'];
    }

    constructor() {
        // Always call super first in constructor
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        console.log("Custom element added to page.");
    }

    disconnectedCallback() {
        console.log("Custom element removed from page.");
    }

    adoptedCallback() {
        console.log("Custom element moved to new page.");
    }

    attributeChangedCallback(name, oldValue, newValue) {
        console.log(`Attribute ${name} has changed: ${oldValue} ->  ${newValue}. `);
        if (oldValue !== newValue) {
            this.render();
        }
    }

    render() {
        const myAtttrValue = this.getAttribute('my-attr') || 'red';
        this.shadowRoot.innerHTML = `
          <style>
            .bg-color {
                background-color: ${myAtttrValue};
            }
          </style>
          <div class="bg-color">
            <p>Custom Attribute Value: ${myAtttrValue}</p>
          </div>
        `;
    }
    refresh(data) {
        this.render();
    }

    static tag = "app-card";
    static register() {
        customElements.define(AppCard.tag, AppCard);
    }
    subscribe(eventName = 'app:basket:changed') {
        window.addEventListener(eventName, (customEvent) => this.refresh(customEvent.detail));
    }
    unsubscribe(eventName = 'app:basket:changed') {
        window.removeEventListener(eventName, (customEvent) => this.refresh(customEvent.detail));
    }
}

