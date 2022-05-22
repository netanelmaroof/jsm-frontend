const contactTemplate = document.createElement("template")

contactTemplate.innerHTML = `
    <style>
        #contact-body {
            display: flex;
            flex-direction: column;
            justify-content: center; 
            align-items: center;
            text-align: center; 
            width: 100%;
        }
    </style>

    <div id="contact-body"> 
        <h3>We are still currently in the process of developing our website, but if you want to get in touch to ask questions, make suggestions, or anything really, you can find us here:</h3>
        
            <p>Email: contactjewishsocialmedia@gmail.com</p>
            <p> Or </p>
            <contact-button-com name="Find Us On Instagram" image="radial-gradient(circle farthest-corner at -8.3% -9%, rgba(221,17,161,0.80) 0%, rgba(253,222,49,0.84) 38.1%, rgba(253,79,49,0.84) 67.4%, rgba(122,12,197,1) 100.2% )"></contact-button-com>

    </div>

    
`

class Contact extends HTMLElement {
    constructor() {
        super(); 

        this.attachShadow({mode: "open"})
        this.shadowRoot.appendChild(contactTemplate.content.cloneNode(true))
    }

}

window.customElements.define("contact-com", Contact)