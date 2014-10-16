<?php
	
	/**
	 * get the values of name and data object from the get - url 
	 * first a database connection is created
	 * then read the values from file
	 */
	$conn = NULL;
	$name = $_GET['name'];
	if($name == NULL) die("Error");
	$handle = fopen("savedFiles/".$name.".txt","r");
	$data = fgets($handle);	
	echo $data;
?>