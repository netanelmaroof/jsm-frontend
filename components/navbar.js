const template = document.createElement("template")
template.innerHTML = `<style>

a {
    all: unset;
}

.body-el {
    display: flex; 
    flex-direction: row;
    justify-content: center; 
    align-items: center; 
}
.innerBText {
    padding-right: 10px;
    padding-left: 10px;
    font-weight: bold;
}

</style>

<div class="body-el">
    <p class="innerBText">Logo</p>
    <a href="#about"><p class="innerBText">About</p></a>
    <a href="#roadmap"><p class="innerBText">Roadmap</p></a>
    <a href="#contact"><p class="innerBText">Contact</p></a>
</div>
`

class Navbar extends HTMLElement {
    constructor() {
        super(); 
        this.attachShadow({mode: "open"})
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
}

window.customElements.define("navbar-com", Navbar)