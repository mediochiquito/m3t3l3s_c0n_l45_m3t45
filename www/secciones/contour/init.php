<?php


	define("INSTA_REDIRECT_URI", SERVER);  

	if($_SERVER['HTTP_HOST']=="mateomenestrina.no-ip.org" || $_SERVER['HTTP_HOST']=="192.168.235.153" || $_SERVER['HTTP_HOST']=="localhost") 
	{   
	
		define("INSTA_CLIENT_ID", "11a601fb3b3f456fb38d3e978d69cf5c");
		define("INSTA_CLIENT_SECRET", "8fbd7b0c16e843988d7f8ae278a8fe6b");
	
	}
	
	else if($_SERVER['HTTP_HOST']=="www.mdinteractivo.com" || $_SERVER['HTTP_HOST']=="mdinteractivo.com" )
	{ 


	} else{

		define("INSTA_CLIENT_ID", "29c86883dfcd40afbfc9f2c6410163cf");
		define("INSTA_CLIENT_SECRET", "a6128033c4ef4ae181943ceaddfc697a");
	
	}
		
