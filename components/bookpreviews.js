class booksPreview extends HTMLElement {
    constructor() {
        super(); //must call this to initiate parent class

        const shadowRoot = this.attachShadow (init: {
            mode: 'closed'
        })

        this.shadowRoot.innerHTML = `
        <img
            class="preview__image"
            src="${image}"
        />
        
        <div class="preview__info">
            <h3 class="preview__title">${title}</h3>
            <div class="preview__author">${authors[author]}</div>
        </div>
        `
    } 
} 

customElements.define( name: 'books-preview', booksPreview)  