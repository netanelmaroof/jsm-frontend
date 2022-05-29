const contactButtonTemplate = document.createElement("template")

contactButtonTemplate.innerHTML = `
    <style>
        #contact-button {
            display: flex;
            color: white;
            align-items: center;
            justify-content: center; 
            height: 55px;
            width: 100px; 
            border-radius: 5px;
            margin: 5px;
            font-weight: bold;
            border: 0;
        }
    </style>
    <button id="contact-button"></button>
`

class ContactButton extends HTMLElement { 
    constructor() {
        super(); 

        this.attachShadow({ mode: "open" })
        this.shadowRoot.appendChild(contactButtonTemplate.content.cloneNode(true))

        this.shadowRoot.getElementById("contact-button").innerText = this.getAttribute("name")
        this.shadowRoot.getElementById("contact-button").style.backgroundColor = this.getAttribute("color")
        this.shadowRoot.getElementById("contact-button").style.backgroundImage = this.getAttribute("image")
        this.shadowRoot.getElementById("contact-button").onclick(() => window.open("https://www.instagram.com/thejewishsocialmedia/"))
    }
}

window.customElements.define("contact-button-com", ContactButton)