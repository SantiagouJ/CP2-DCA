import Root from "./Root/Root";
import { getData } from "./services/Plants";
getData()

customElements.define('root-element', Root);
