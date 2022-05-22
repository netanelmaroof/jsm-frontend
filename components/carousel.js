const carouselTemplate = document.createElement("template")

carouselTemplate.innerHTML = `
    <style>

        #carousel-inner-body {
            margin: 50px;
            margin-bottom: 60px;
            width: 80%;
            height: 300px; 
            text-align: center; 
            flex-basis: 100%;
           
        }

       #carousel-title {
            color: #2d81c1;
       }

    </style>
    
        <div id="carousel-inner-body"> 
            <div id="carousel-image"></div>
            <h2 id="carousel-title"></h2>
            <div id="carousel-text"></div>
        </div>
 

`

class Carousel extends HTMLElement {
    constructor() {
        super(); 
        this.attachShadow({mode: "open"})
        this.shadowRoot.appendChild(carouselTemplate.content.cloneNode(true))

        this.shadowRoot.getElementById("carousel-title").innerText = this.getAttribute("name")
        this.shadowRoot.getElementById("carousel-text").innerText = this.getAttribute("text")
        this.shadowRoot.getElementById("carousel-image").innerHTML = `<img src="../images/${this.getAttribute("icon")}.svg" />`
    }
}

window.customElements.define("carousel-com", Carousel)