<?php
	session_start();
	session_cache_expire(360); //6 horas tiene cualquier persona antes que la session expire
	ob_start("ob_gzhandler");
	ignore_user_abort ( true );
	error_reporting( E_ALL ^ E_NOTICE);
	

	if($_SERVER['HTTP_HOST']=="bender.com" || $_SERVER['HTTP_HOST']=="192.168.235.153") 
	{   
		
		define("DB_HOST", "localhost");
		define('DB_USER', 'root'); 
	    define('DB_PASS', '');
	    define('DB_NAME','');	
	    define('FB_APP_ID', '');
	    define('FB_APP_SECRET', '');

		define("SERVER", "");	
		define(SITE_URL, "http://192.168.235.153//public/");	
		define("FB_APP_ID", "");
		define("FB_APP_SECRET","");
		
	} else {
		
	   define("DB_HOST", "localhost");
		define('DB_USER', 'root'); 
	    define('DB_PASS', '');
	    define('DB_NAME','');	
	    define('FB_APP_ID', '');
	    define('FB_APP_SECRET', '');

		define("SERVER", "");	
		define(SITE_URL, "http://192.168.235.153//public/");	
		define("FB_APP_ID", "");
		define("FB_APP_SECRET","");
	}
		
	//DATE
	if(function_exists("date_default_timezone_set") and function_exists("date_default_timezone_get"))
    	@date_default_timezone_set(@date_default_timezone_get());

	//SQL
	$conexion_mysql = mysql_connect( DB_HOST, DB_USER, DB_PASS) or die('Could not connect to mysql server. ' . mysql_error() );
	mysql_select_db(DB_NAME) or die('Could not select database.' . DB_NAME);
	mysql_query("SET NAMES utf8");
	
	//LOGS
    if(sizeof($_POST) || sizeof($_GET))
    {
        $data = "\r\n".date('H:i:s').' - '.$_SERVER['REQUEST_URI'].' - |POST| <$POST$>';

        foreach($_POST as $key => $value)
            $rpl .=' '.$key.'='.$value.' &';
        
        $data = str_replace('<$POST$>', $rpl, $data);        
        
        file_put_contents(dirname(__FILE__).'/_logs/'.date('Y_m_d').'.txt', $data, FILE_APPEND);
        @chmod(dirname(__FILE__).'/_logs/'.date('Y_m_d').'.txt', 0777);
        
    }
    
    /*****************************************************************/
   
