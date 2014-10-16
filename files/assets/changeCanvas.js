/**
 * this function stores the canvas state as a string in canvasState stack.
 * each time a change is made in the canvas, it is stored in the stack.
 */
function storeCanvasState() {
	canvasState.push(JSON.stringify(canvas));
}

/**
 * delete the selected object
 */
function deleteObject() {
	canvas.remove(canvas.getActiveObject());
}

/**
 * clears all the objects on canvas
 * and draw the canvas rectangle again
 */
function clearAll() {
	canvas.clear();
	drawCanvasRect();
}
