class AppBuy extends HTMLElement {

    render() {
        this.innerHTML = `<button type="button">buy</button>`;
    }
    connectedCallback() {
        this.render();
        this.firstChild.addEventListener('click', this.addToCart);
        //this.firstChild.addEventListener('click', (pointerEvent) => this.addToCart(pointerEvent));
    }
    disconnectedCallback() {
        this.firstChild.removeEventListener('click', this.addToCart);
        //this.firstChild.removeEventListener('click', (pointerEvent) => this.addToCart(pointerEvent));
    }

    addToCart(pointerEvent) {
        function getPrd() {
            let prdId = Math.floor(Math.random() * 5);
            let names = ['bubbles', 'apples', 'toys', 'pears', 'pineapples'];
            return { name: names[prdId], id: prdId }
        }

        this.dispatchEvent(new CustomEvent('app:basket:changed', {
            bubbles: true,
            detail: getPrd()
        }));
    }

    static tag = 'app-buy';
    static register() {
        customElements.define(AppBuy.tag, AppBuy);
    }
}
