export { generate, selected_tile };
import * as Render from "./canvas-renders.js";

let selected_tile = null;


function selector(instance_type, coords) {
	switch (instance_type) {
		case "tile": selected_tile = coords;
		default: new Error("Instance Type: " + instance_type + " is not a valid type!");
	}

}

function tileHandler(event_type, coords, instance) {
	instance.on(event_type, () => { 
		selector("tile", coords);
	});
}

function createTile(color, scale, pos) {
	const tile_size = scale / 2;
	let tile_graph_context = new PIXI.GraphicsContext()
		.rect(pos.x, pos.y, tile_size, tile_size)
		.fill(color);	

	const graphics = new PIXI.Graphics(tile_graph_context);
	graphics.eventMode = "static";

	return graphics;
}

function make_tiles(board_data) {
	const default_pos = { x: 3, y: 3};
	let position = { x: default_pos.x, y: default_pos.y };
	let tile_color = "ffffff";
	let displacement = board_data.scale / 2;
	
	for(let i = 0; i < board_data.total - 2; i++) {
		const current = board_data.tiles[i];
		if(current == "w") { tile_color = "e1e3e6" }
		else if(current == "b") { tile_color = "071e38" }
		else if(current == ";") { position.x = default_pos.x; position.y += displacement; i++ };

		const tile = createTile(tile_color, board_data.scale, position);
		tileHandler("pointerup", i, tile);

		position.x += displacement;
		Render.toTileGroup(tile);

	}
}

function generate(board_data) {

	make_tiles(board_data);
	Render.toCanvas(Render.tiles);
	board_data.active = true;

	return board_data;
}

