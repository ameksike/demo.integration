class AppBuy extends HTMLElement {

    render() {
        this.innerHTML = `<button type="button">buy</button>`;
    }
    connectedCallback() {
        this.render();
        this.subscribe('click', 'addToCart');
    }
    disconnectedCallback() {
        this.unsubscribe('click', 'addToCart');
    }

    addToCart(pointerEvent) {
        function getPrd() {
            let prdId = Math.floor(Math.random() * 5);
            let names = ['bubbles', 'apples', 'toys', 'pears', 'pineapples'];
            return { name: names[prdId], id: prdId }
        }
        this.dispatchEvent(pointerEvent, 'app:basket:changed', getPrd());
    }

    static tag = 'app-buy';
    static register() {
        customElements.define(AppBuy.tag, AppBuy);
    }
    subscribe(eventName = 'click', handler = 'addToCart') {
        const action = this[handler];
        this.firstChild.addEventListener(eventName, (pointerEvent) => action.apply(this, [pointerEvent]));
    }
    unsubscribe(eventName = 'click', handler = 'addToCart') {
        const action = this[handler];
        this.firstChild.removeEventListener(eventName, (pointerEvent) => action.apply(this, [pointerEvent]));
    }
    dispatchEvent(pointerEvent, eventName = 'app:basket:changed', data = {}) {
        const eventManager = pointerEvent?.target || this;
        eventManager.dispatchEvent(new CustomEvent(eventName, {
            bubbles: true,
            detail: data
        }));
    }
}
