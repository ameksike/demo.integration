class AppBasket extends HTMLElement {

    constructor() {
        super();

        this.value = 1;
        this.prd = {};
    }
    refresh(prd) {
        this.value = this.value + 1;
        this.prd = prd;
        this.render();
    }

    render(value) {
        value = value || this.value;
        this.innerHTML = `
            <ul>
                <li> <strong> Act: </strong> ${value} </li> 
                <li> <strong> Prd Id: </strong> ${this.prd?.id} </li> 
                <li> <strong> Prd Name: </strong> ${this.prd?.name} </li> 
            </ul>
        `;
    }
    connectedCallback() {
        // Auto subscription 
        this.subscribe('app:basket:changed');
        this.render();
    }
    disconnectedCallback() {
        this.unsubscribe('app:basket:changed');
    }
    
    static tag = 'app-basket';
    static register() {
        customElements.define(AppBasket.tag, AppBasket);
    }
    subscribe(eventName = 'app:basket:changed') {
        window.addEventListener(eventName, (customEvent) => this.refresh(customEvent.detail));
    }
    unsubscribe(eventName = 'app:basket:changed') {
        window.removeEventListener(eventName, (customEvent) => this.refresh(customEvent.detail));
    }
}