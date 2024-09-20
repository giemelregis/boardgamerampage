export { toCanvas, toTileGroup, tiles }
import {app} from "./main.js";

const tiles = new PIXI.Container({
	isRenderGroup: true
});

function toCanvas(child) {
	app.stage.addChild(child);	
}

function toTileGroup(child) {
	tiles.addChild(child);	
}
