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

            <style>
            #container{
            background-color: rgb(147, 137, 255);
            border: 2px solid rgb(118, 110, 213);
            width: 300px;
            height: auto;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            border-radius: 20px;
            padding: 20px;
            margin: 10px;
            }
            img{
                width: 150px;
                height: 150px;
                object-fit: cover;
                border-radius: 10px;
            }
            .cards-container {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 20px;
                padding: 20px;
                max-width: 1200px;
                margin: 0 auto;
            }
            h1 {
                font-size: 1.5rem;
                margin: 10px 0;
                text-align: center;
            }
            h2 {
                font-size: 1rem;
                margin: 5px 0;
                text-align: center;
            }
            button{
                background-color: rgb(101, 89, 235);
                border: 2px solid rgb(118, 110, 213);
                border-radius: 10px;
                padding: 10px;
                margin: 10px;
            }
            button:hover{
                background-color: rgb(118, 110, 213);
                cursor: pointer;
                transition: all 0.3s ease;

            }
            </style>
            <div class="cards-container">

            ${data.map((plants:Plant)=>`
                <div id="container">
                <h1>${plants.common_name}</h1>
                <h2>${plants.flowering_season}</h2>
                <img src="${plants.img}" alt="">
                <h2>${plants.origin}</h2>
                <h2>${plants.watering}</h2>
                <h2>${plants.sun_exposure}</h2>
                <h2>${plants.type}</h2>
                <button>Agregar al jardin</button>
                 </div>
                `).join("")}


            </div>


            

        

        

        `;
    }
}

export default PlantsCards;