<?php
	
	/**
	 * get the values of name and data object from the get - url 
	 * first a database connection is created
	 * then insert the values in files
	 */
	$conn = NULL;
	$name = $_GET['name'];
	if($name == NULL) die("Error");
	$dataObject = $_GET['dataObject'];
	if($dataObject == NULL) die("Error");
	$handle = fopen("savedFiles/".$name.".txt","w");
	$result = fwrite($handle,$dataObject);
	fclose($handle);
	if($result==0) echo '0';
	else echo '1';
?>