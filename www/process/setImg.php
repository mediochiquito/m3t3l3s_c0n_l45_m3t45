<?
include dirname(dirname(__FILE__)) . "/init.php";
/*echo json_encode($_POST['a']);
exit;*/

$hash = md5($_POST['uid'].date('Ymdhis').rand(0, 100000));


$array_fotos = $_POST['a'];
/*$array_fotos = json_decode('[{"holder_x":"60","holder_y":"8","holder_w":"88","holder_h":"98","img_x":"-92","img_y":"-87","img_w":"273","img_h":"273","img":"https:\/\/scontent.cdninstagram.com\/hphotos-xaf1\/t51.2885-15\/s320x320\/e15\/11312272_1004255809598568_367033409_n.jpg"},{"holder_x":"46","holder_y":"106","holder_w":"115","holder_h":"67","img_x":"0","img_y":"-24","img_w":"115","img_h":"115","img":"https:\/\/scontent.cdninstagram.com\/hphotos-xaf1\/l\/t51.2885-15\/s320x320\/e15\/11419213_868768543211262_701594381_n.jpg"},{"holder_x":"22","holder_y":"173","holder_w":"165","holder_h":"93","img_x":"-12","img_y":"-48","img_w":"190","img_h":"190","img":"https:\/\/scontent.cdninstagram.com\/hphotos-xaf1\/t51.2885-15\/s320x320\/e15\/11378326_494256077400152_2007418041_n.jpg"},{"holder_x":"16","holder_y":"266","holder_w":"88","holder_h":"103","img_x":"-7","img_y":"0","img_w":"103","img_h":"103","img":"https:\/\/scontent.cdninstagram.com\/hphotos-xaf1\/t51.2885-15\/s320x320\/e15\/11378326_494256077400152_2007418041_n.jpg"},{"holder_x":"104","holder_y":"266","holder_w":"89","holder_h":"103","img_x":"-94","img_y":"-87","img_w":"278","img_h":"278","img":"https:\/\/scontent.cdninstagram.com\/hphotos-xfa1\/t51.2885-15\/s320x320\/e15\/11410421_890435834363754_917682798_n.jpg"},{"holder_x":"16","holder_y":"369","holder_w":"178","holder_h":"88","img_x":"0","img_y":"-45","img_w":"178","img_h":"178","img":"https:\/\/scontent.cdninstagram.com\/hphotos-xaf1\/t51.2885-15\/s320x320\/e15\/11410444_111674122503430_1115251528_n.jpg"},{"holder_x":"23","holder_y":"457","holder_w":"82","holder_h":"103","img_x":"-10","img_y":"0","img_w":"103","img_h":"103","img":"https:\/\/scontent.cdninstagram.com\/hphotos-xfa1\/t51.2885-15\/s320x320\/e15\/11373491_1620640254843214_10203330_n.jpg"},{"holder_x":"105","holder_y":"457","holder_w":"82","holder_h":"103","img_x":"-10","img_y":"0","img_w":"103","img_h":"103","img":"https:\/\/scontent.cdninstagram.com\/hphotos-xfa1\/t51.2885-15\/s320x320\/e15\/11410421_890435834363754_917682798_n.jpg"},{"holder_x":"14","holder_y":"560","holder_w":"180","holder_h":"90","img_x":"-87","img_y":"-132","img_w":"355","img_h":"355","img":"https:\/\/scontent.cdninstagram.com\/hphotos-xfa1\/t51.2885-15\/s320x320\/e15\/11373491_1620640254843214_10203330_n.jpg"}]');*/
/*

*/
$ancho = 208;
$alto = 650;
$imagen = imagecreatetruecolor($ancho, $alto);
/*$base = imagecreatefrompng('../img/contour/tapa_botella_layout2.png');*/
$mask = imagecreatefrompng('../img/contour/mask_botella2.png');



//imagecopyresampled($imagen, $base, 0 , 0, 0, 0, $ancho, $alto, $ancho, $alto);


foreach ($array_fotos as $foto) {

	//$foto = $array_fotos[0];
	$pic = imagecreatefromjpeg($foto['img']);
	$fotos[] = $pic;
  $imgAnto = imagecreatetruecolor($foto['img_w'], $foto['img_h']);
  imagecopyresampled($imgAnto, $pic, 0, 0, 0,0, $foto['img_w'] , $foto['img_h'], 320 , 320);
  imagecopy ( $imagen , $imgAnto , $foto['holder_x'] , $foto['holder_y'] ,-$foto['img_x'] , -$foto['img_y'], $foto['holder_w'], $foto['holder_h']);

}


imagealphamask($imagen, $mask);

//header('Content-type: image/png');
imagepng($imagen, '../botellas/'.$hash.'.png');
echo $hash;

function imagealphamask( &$picture, $mask ) {
  // Get sizes and set up new picture
  $xSize = imagesx( $picture );
  $ySize = imagesy( $picture );
  $newPicture = imagecreatetruecolor( $xSize, $ySize );
  imagesavealpha( $newPicture, true );
  imagefill( $newPicture, 0, 0, imagecolorallocatealpha( $newPicture, 0, 0, 0, 127 ) );
  
  // Resize mask if necessary
  if( $xSize != imagesx( $mask ) || $ySize != imagesy( $mask ) ) {
    $tempPic = imagecreatetruecolor( $xSize, $ySize );
    imagecopyresampled( $tempPic, $mask, 0, 0, 0, 0, $xSize, $ySize, imagesx( $mask ), imagesy( $mask ) );
    imagedestroy( $mask );
    $mask = $tempPic;
  }

  // Perform pixel-based alpha map application
  for( $x = 0; $x < $xSize; $x++ ) {
    for( $y = 0; $y < $ySize; $y++ ) {
      $alpha = imagecolorsforindex( $mask, imagecolorat( $mask, $x, $y ) );
      $alpha = 127 - floor( $alpha[ 'red' ] / 2 );
      $color = imagecolorsforindex( $picture, imagecolorat( $picture, $x, $y ) );
      imagesetpixel( $newPicture, $x, $y, imagecolorallocatealpha( $newPicture, $color[ 'red' ], $color[ 'green' ], $color[ 'blue' ], $alpha ) );
    }
  }
  
  // Copy back to original picture
  imagedestroy( $picture );
  $picture = $newPicture;
} // end imagealphamask()


?>