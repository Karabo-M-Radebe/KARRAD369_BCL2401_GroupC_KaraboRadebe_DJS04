class booksPreview extends HTMLElement {
    constructor() {
        super(); //must call this to initiate parent class

        const shadowRoot = this.attachShadow (init: {
            mode: 'closed'
        })
    } 
} 

customElements.define( name: 'books-preview', booksPreview) 