/**
 * download canvas drawing as a jpeg image
 */
function downloadImage() {
	var button = document.getElementById('downloadImage');
	var url = canvas.toDataURL("image/jpeg");
	window.open(url);
}

/**
 * function to store canvas data in a database
 * file name is asked via prompt
 * ajax request is generated to a php file that saves the canvas object in the mysql database 
 */
function saveImage() {
	imageName = prompt("Enter the image name:",imageName);
	var dataObject = JSON.stringify(canvas);
	xmlhttp.open("get","assets/saveImage.php?name="+imageName+"&dataObject="+dataObject,false);
	xmlhttp.onreadystatechange = handler;
	xmlhttp.send();
}

function handler(response) {
	if(xmlhttp.readyState==4) saveMessage();
	else if(xmlhttp.status!=200) alert('Image could not be saved.');
}

function saveMessage() {
	if(xmlhttp.responseText==1) alert('Image saved');
}

function openImage() {
	var openImageName = prompt("Enter the imageName","");
	xmlhttp.open("get","assets/openImage.php?name="+openImageName,false);
	xmlhttp.onreadystatechange = openHandler;
	xmlhttp.send();
}

function openHandler() {
	if(xmlhttp.readyState==4) openLoadedImage();
	//else if(xmlhttp.status!=200) alert('Image could not be opened.');
}

function openLoadedImage() {
	var openedImageArray = xmlhttp.responseText;
	canvas.loadFromJSON(openedImageArray);
	canvas.renderAll();
}