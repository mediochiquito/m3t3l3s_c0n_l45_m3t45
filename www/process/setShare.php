<?
// $hash creado en el incude
//$hash = 'a41156b5bfbfe56665a6fbc738f41380';
$ancho = 1200;
$alto = 630;
$imagen = imagecreatetruecolor($ancho, $alto);
$base = imagecreatefrompng('../img/contour/share_base.png');

imagecopyresampled($imagen, $base, 0 , 0, 0, 0, $ancho, $alto, $ancho, $alto);

$botella = imagecreatefrompng('../botellas/'.$hash.'.png');
imagealphablending($botella, true);
imagesavealpha($botella, true);

$width0  = imagesx($botella);
$height0 = imagesy($botella);

imagecopyresampled($imagen, $botella, 504, 10, 0, 0, 195, 610, 208, 650);

//header('Content-type: image/png');
//imagepng($imagen);

imagepng($imagen, '../botellas/share_'.$hash.'.png');


function alpha(&$im)
{
 
    for($x = 0; $x < imagesx($im); ++$x)
    {
        for($y = 0; $y < imagesy($im); ++$y)
        {
            $index = imagecolorat($im, $x, $y);
            $rgb = imagecolorsforindex($index);

            $color = imagecolorallocatealpha($im, $rgb['red'], $rgb['green'], $rgb['blue'], $rgb['alpha']);

            imagesetpixel($im, $x, $y, $color);
        }
    }

}