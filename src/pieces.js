import * as Render from "./canvas-renders.js";
export {generatePiece};

// just an example, to see if the svg will render
const knight_svg = await PIXI.Assets.load({
	src: "/src/assets/knight.svg",
	data: {
		parseAsGraphicsContext: true
	}
});


function generatePiece(piece_data) {
	const piece = new PIXI.Graphics(knight_svg);
	piece.scale.set(0.15);
	piece.position.set(320,478);
	Render.toCanvas(piece);
	return piece;
}

