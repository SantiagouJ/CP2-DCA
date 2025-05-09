import { getData } from "../services/Plants";
import { Plant } from "../services/types/plantsType";

class PlantsCards extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    async render() {
        if (!this.shadowRoot) return;
        const data = await getData()

        console.log(data);
        

        this.shadowRoot.innerHTML = `  

    <link rel="stylesheet" href="/public/styles/cardComp.css">
            <style>
            #container{
            background-color: rgb(147, 137, 255);
            border: 2px solid rgb(118, 110, 213);
            width: 500px;
            height: 500px;
            display:flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            border-radius: 20px
            }
            img{
                width: 100px;
                height: 100px;
            }
            div{
                background-color: rgb(216, 213, 255);
                display:flex;
                flex-direction: column;
    align-items: center;
    justify-content: center;
                
            }
            </style>
            <div>

            ${data.map((plants:Plant)=>`
                <div id="container">
                <h1>${plants.commonName}</h1>
                <h2>${plants.floweringSeason}</h2>
                <img src="${plants.img}" alt="">
                <h2>${plants.origin}</h2>
                <h2>${plants.floweringSeason}</h2>
                <h2>${plants.sunExposure}</h2>
                <h2>${plants.type}</h2>
                 </div>
                `).join("")}


            </div>


            

        

        

        `;
    }
}

export default PlantsCards;