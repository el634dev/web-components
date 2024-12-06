// HTMLImage
class BackgroundImage extends HTMLElement {
    constructor() {
        super();

        // Attach a shadow root to the element
        this._shadowRoot = this.attachShadow({ mode: 'open' });

        // ----------------------------
        // Make two new elements to hold a background image and text
        this._el = document.createElement('div');
        this._textEl = document.createElement('div');

        // ----------------------------
        // Set the image url to be the content of the above element
        const imageUrl = this.getAttribute('src') || 'https://placehold.co/600x400/png';

        // ----------------------------
        // Set the styles on the new background image
        this._el.style.backgroundImage = `url(${imageUrl})`;
        this._el.style.backgroundSize = 'cover';
        this._el.style.backgroundPosition = 'center';
        this._el.style.width = '100%';
        this._el.style.height = '100%';
        this._el.style.display = 'block';

        // ----------------------------
        // Text Logic
        this._textEl.textContent = this.getAttribute('text')
   
        this._textEl.style.transform = 'translate(-50px, 10px)'
        this._textEl.style.color = '#fff'
        this._textEl.style.textAlign = 'center'
        this._textEl.style.fontSize = '2rem';
        this._textEl.style.fontFamily = 'system-ui';
        this._textEl.style.letterSpacing = '1.65';
        this._textEl.style.textShadow = '2px 2px 4px rgba(0,0,0,0.7)';

        // ----------------------------
        // Add the element to the shadow root
        this._el.appendChild(this._textEl);
        this._shadowRoot.appendChild(this._el);
    }

    connectedCallback() {
        // Set a default height for the background image
        this.style.height = '400px'; // You can adjust this as needed
        this.style.display = 'block';
    }

    static get observedAttributes() {
        return ['src'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'src') {
            this._el.style.backgroundImage = `url(${newValue})`;
        } else if (name === 'text') {
            this._textEl.textContent = newValue;
        }
    }
}

// Register this new tag
customElements.define('background-img', BackgroundImage);
