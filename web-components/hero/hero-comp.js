// HTMLImage
class HeroComponent extends HTMLElement {
    constructor() {
        super();

        // Attach a shadow root to the element
        this._shadowRoot = this.attachShadow({ mode: 'open' });

        // ----------------------------
        // Make new elements to hold a container, text and a button
        this._el = document.createElement('div');
        this._text = document.createElement('h2');
        this._button = document.createElement('button');

        // ----------------------------
        // Set the image url to be the content of the above element
        const imageUrl = this.getAttribute('src') || 'https://placehold.co/600x400/png';

        // ----------------------------
        // Set the styles on the new background image
        this._el.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${imageUrl})`;
        this._el.style.backgroundSize = 'cover';
        this._el.style.backgroundPosition = 'center';
        this._el.style.position = 'relative';
        this._el.style.width = '100%';
        this._el.style.height = '400px';
        this._el.style.display = 'flex';
        this._el.style.flexDirection = 'column';
        this._el.style.alignItems = 'center';
        this._el.style.justifyContent = 'center';
        this._el.style.color = '#fff';
        this._el.style.textAlign = 'center';

        // ---------------------------
        // Text Styling
        this._text.textContent = this.getAttribute('text') || 'Hello World';
        this._text.style.fontSize = '2rem';
        this._text.style.fontFamily = 'system-ui';
        this._text.style.letterSpacing = '1.65px';

        // ---------------------------
        // Button Styling
        this._button.textContent = this.getAttribute('button-text') || 'Get Started';
        this._button.style.padding = '10px 20px';
        this._button.style.fontSize = '1rem';
        this._button.style.color = '#fff';
        this._button.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
        this._button.style.border = 'none';
        this._button.style.borderRadius = '5px';
        this._button.style.cursor = 'pointer';
        this._button.style.marginTop = '20px';

        // ---------------------------
        // Add the element to the shadow root
        this._el.appendChild(this._text);
        this._el.appendChild(this._button);
        this._shadowRoot.appendChild(this._el);
    }

    static get observedAttributes() {
        return ['src', 'text', 'button-text'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'src') {
            this._el.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${newValue})`;
        } else if (name === 'text') {
            this._text.textContent = newValue;
        } else if (name === 'button-text') {
            this._button.textContent = newValue;
        }
    }
}

// Register this new tag
customElements.define('hero-component', HeroComponent);
