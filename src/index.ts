import Root from "./Root/Root";
import { getData } from "./services/Plants";
import PlantsCards from "./components/plantCard";

customElements.define('root-element', Root);
customElements.define('plants-cards', PlantsCards);

console.log("Hola")

getData()