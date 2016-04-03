<!--
<?php /*
//De momento no mando el mensaje y muestro que ha tenido exito 
//para que no tenga en cuenta si no se ejecuta desde servidor
mb_http_input("charset=utf-8");
//mb_http_output("charset=utf-8");


$para = "ricardo@ocanyaweb.es";
$asunto = "Formulario desde PandaWeb";
$origen = "PandaWeb";

$nombre = $_POST['nombre']; 
$telefono = $_POST['telefono'];
$email = $_POST['email'];
$consulta = $_POST['consulta'];

$mensaje = "";
$mensaje .= "Solicitud de información";
$mensaje .= "\n";
$mensaje .= "\n";

$mensaje .= "Nombre: '";
$mensaje .= $nombre;
$mensaje .= "'\n";
$mensaje .= "Teléfono: '";
$mensaje .= $telefono;
$mensaje .= "'\n";
$mensaje .= "'E-Mail: '";
$mensaje .= $email;
$mensaje .= "'\n";
$mensaje .= "Motivo de la consulta: '";
$mensaje .= $consulta;
$mensaje .= "'\n";
if ($motivo != null){
	$enviado  = mail($para, $asunto, $mensaje, "From: $origen");
}
if($enviado){
*>
?> 
-->
    <p class="exito">Su mensaje ha sido enviado correctamente.<br />
    Nos pondremos en contacto lo antes posible.</p>
<!--
<?php
/*
} else {
	 echo "<p class=\"error\">Mensaje no enviado, intentelo de nuevo más tarde.</p>\n";
}
echo $mensaje;
*/
?>
-->