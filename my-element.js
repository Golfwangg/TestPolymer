import {PolymerElement, html} from '@polymer/polymer';

class MyElement extends PolymerElement {

    constructor() {
        super();
        this.name = 'NAME';
    }

    static get properties() {
        return { 
            name: String
        }
    }

    static get template() {
        return html`
        <div class="name">Hello {{name}}!</div>
        <input id="nameinput" type="text" value="{{name}}"/>
        <button on-click="setName">Submit</button>
        `;
    }

    setName() {
        this.name = this.$.nameinput.value;
    }
}

customElements.define('my-element', MyElement);