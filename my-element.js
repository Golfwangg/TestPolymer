import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

class MyElement extends PolymerElement {
    
	static get properties() { 
		return {
			name: {
				type: String
			},
			clicked: {
				type: Boolean,
				value: false,
				notify: true,
				reflectToAttribute: true
			}
		}
	}

    static get template() {
		return html`
		<style>
			:host {
				--custom-background-color: red;
            }
            
			:host([clicked]) {
				--custom-background-color: blue;
            }
            
			.container {
				display: flex;
				flex-direction: column;
				height: 900px;
				justify-content: center;
				align-items: center;
				text-align: center;
            }
            
			#name {
				width: 500px;
				padding: 40px 0;
				border: black 2px;
				color: white;
				border-radius: var(--custom-border-radius);
				background-color: var(--custom-background-color);
				-moz-transition: all 0.6s ease-in-out;
				-webkit-transition: all 0.6s ease-in-out;
				-o-transition: all 0.6s ease-in-out;
				-ms-transition: all 0.6s ease-in-out;
				transition: all 0.6s ease-in-out;
			}

			#name:hover {
				--custom-border-radius: 25px;
            }

			input {
				margin-top: 50px;
				width: 300px;
				padding: 10px;
			}
		</style>

		<div class="container">
			<div id="name">Hello [[name]]!</div>
			<input value='{{name::input}}'/>
		</div>
        `;
    }

	ready() {
		super.ready();
		const div = this.$.name;
		div.addEventListener('click', this.clickHandler.bind(this));
	}

	clickHandler() {
		this.clicked = !this.clicked;
    }
}

customElements.define('my-element', MyElement);