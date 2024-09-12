export { toCanvas }
import {app} from "./main.js";

function toCanvas(child) {
	app.stage.addChild(child);	
}
