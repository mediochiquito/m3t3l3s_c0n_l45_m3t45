<?
include dirname(dirname(__FILE__)) . "/init.php";


switch($_GET['method']){


	case 'add':

		  $device = 'desktop';
		  if($_POST["m"] == '1')   $device = 'mobile';
		  if($_POST["t"] == '1')   $device = 'tablet';

		  $rs = mysql_query("
		
				INSERT INTO promo100_usuarios SET
			
					usuarios_instagram='".			mysql_real_escape_string($_POST["uid"])		."', 
					usuarios_instagram_at='".			mysql_real_escape_string($_POST["at"])		."', 
					usuarios_nombre='".			mysql_real_escape_string($_POST["nombre"])		."', 
					usuarios_apellido='".		mysql_real_escape_string($_POST["apellido"])	."', 
					usuarios_email='".			mysql_real_escape_string($_POST["email"])		."', 
					botellas_archivo='".		mysql_real_escape_string($_POST["hash"])		.".png', 
					usuarios_device='" . $device ."';

					");
		
				if($rs){

					$hash = $_POST["hash"];
			  		
					require dirname(__FILE__) . '/setShare.php';

					
					die('1');
				}else{
					die('Ha ocurrido un error');
				}
  



		break;


}


?>