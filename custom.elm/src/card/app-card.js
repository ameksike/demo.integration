class AppCard extends HTMLElement {

    static observedAttributes = ["color", "size"];

    constructor() {
        // Always call super first in constructor
        super();
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
        console.log(`Attribute ${name} has changed.`);
    }


    render() {
        
    }
    refresh(data) {

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

