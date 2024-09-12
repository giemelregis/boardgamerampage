export { generate };
import * as Render from "./canvas-renders.js";

function createTile(color, scale, pos) {
	const tile_size = scale / 2;
	let tile_graphics = new PIXI.Graphics()
		.rect(pos.x, pos.y, tile_size, tile_size)
		.fill(color);	

	return tile_graphics;
}

function generate(board_data) {
	const default_pos = { x: 3, y: 3};
	let position = { x: default_pos.x, y: default_pos.y };
	let tile_color = "ffffff";
	let displacement = board_data.scale / 2;

	for(let i = 0; i < board_data.total - 2; i++) {
		const current = board_data.tiles[i];
		if(current == "w") { tile_color = "ffffff" }
		else if(current == "b") { tile_color = "000000" }
		else if(current == ";") { position.x = default_pos.x; position.y += displacement; i++ };

		const tile = createTile(tile_color, board_data.scale, position);
		Render.toCanvas(tile);

		position.x += displacement;
	}
	board_data.active = true;
	return board_data;
}

