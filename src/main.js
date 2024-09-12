export { app }
import * as Board from "./board.js";

const app = new PIXI.Application();
await app.init({ width: 640, height: 540, backgroundColor: "3b3c3d"});
document.body.appendChild(app.canvas);

// TODO: this is just a test template
const board_data = {
	tiles: "wbwbwbwb;bwbwbwbw;wbwbwbwb;bwbwbwbw;wbwbwbwb;bwbwbwbw;wbwbwbwb;bwbwbwbw",
	special_tiles: "",
	import_tiles: "",
	rules: "chess-standard",
	scale: 158,
	rows: 8,
	columns: 8,
	total: 64,
	active: false
};


Board.generate(board_data);


