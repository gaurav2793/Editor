/**
 * this file contains functions that draw the objects on the canvas
 * objects that can be drawn: rectangle, circle, arrow and database
 */

/*function drawCanvasRect() {
	var canvasWidth = canvas.width;
	var canvasHeight = canvas.height;
	var rect = new fabric.Rect({
	  left: 0,
	  top: 0,
	  fill: 'white',
	  stroke:'white',
	  width: canvasWidth,
	  height: canvasHeight
	});
	canvas.add(rect);
	rect.hasControls = false;
	rect.hasBorders = false;
	rect.lockMovementX = true;
	rect.lockMovementY = true;
	rect.selectable = false;
}*/
/**
 * this function creates a rectangle on the screen
 * a fabric inbuilt class Rect is used
 * rectangle: no borders, but has controls
 */
function drawRect() {
	var text = new fabric.Text("",{
		fontSize:16,
		left:10
	});
	var shape = new fabric.Rect({
	  fill: 'white',
	  stroke:'black',
	  width: 120,
	  height: 30
	});
	var rect = new fabric.Group([shape,text],{
		left:20,
		top:20
	});
	canvas.add(rect);
	rect.hasBorders = true;
	//define double click event
}
/**
 * this function creates a circle on the screen
 * a fabric class Circle is used
 * circle: no borders, but has controls
 */
function drawCircle() {
	var text = new fabric.Text("",{
		fontSize:16,
		left:26,
		top:40
	});
	var shape = new fabric.Circle({
		radius:40,
		stroke:'black',
		fill:'white',
		left:20,
		top:20
	});
	var circle = new fabric.Group([shape,text],{
		left:20,
		top:20
	});
	canvas.add(circle);
	circle.hasBorders = true;
}
/**
 * this function creates an arrow on the screen
 * a fabric path is defined to draw an arrow
 * arrow: no borders, but has controls
 */
function drawArrow() {
	var text = new fabric.Text("",{
		fontSize:16,
		left:30,
		top:30
	});
	var shape = new fabric.Path('M10,50L60,50L50,40M60,50L50,60');
	shape.set({fill:'white',stroke:'black'});
	var arrow = new fabric.Group([shape,text],{
		left:20,
		top:20
	});
	canvas.add(arrow);
	arrow.hasBorders = true;
	arrow.hasControls = true;
	arrow.setTop = 20;
	arrow.setLeft = 20;
}

/**
 * this function creates a database on the screen
 * a fabric path is defined to draw the database
 * database: no borders, but has controls
 */
function drawDatabase() {
	var text = new fabric.Text("",{
		fontSize:16,
		left:70,
		top:165
	});
	var shape = new fabric.Path('M110,10L10,10L10,110L110,110M40,110L40,10');
	shape.set({fill:'white',stroke:'black'});
	var db = new fabric.Group([shape,text],{
		left:20,
		top:20
	});
	canvas.add(db);
	db.hasBorders = true;
}

function freeDrawing() {
	if(canvas.isDrawingMode==undefined || canvas.isDrawingMode==false){
		canvas.isDrawingMode=true;
		document.getElementById('pencilButton').setAttribute("class","btn btn-danger btn-lg");
	} 
	else{
		canvas.isDrawingMode=false;	
		document.getElementById('pencilButton').setAttribute("class","btn btn-primary btn-lg");
	} 
}

function addText() {
	var txt = document.getElementById('textEntered').value;
	if(canvas.getActiveObject()==undefined) {
		//add normal text to the canvas
		var text = new fabric.Text(txt,{
			fontSize:20,
			left:10
		});
		canvas.add(text);
	} else {
		//add text to a particular shape
		var selectedGroup = canvas.getActiveObject();
		selectedGroup._objects[1].text = txt;
		canvas.renderAll();
	}
	$('#addTextModal').modal('hide');
	canvas.renderAll();
}