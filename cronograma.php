<!DOCTYPE html>
<html lang="pt-br">
<head>
	<meta charset="utf-8">
	<title>Cronograma</title>
	<link rel="stylesheet" type="text/css" href="estilo.css">
	<!-- Favicon -->
    <link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png">
    <link rel="manifest" href="favicon/site.webmanifest">
</head>
<body>
	<header>
		<h1>Cronograma Semanal de Aulas</h1>
        <p id="subtitulo">Ensino Médio, Técnico em Informática p/ Internet e Técnico em Administração</p>
	</header>
	<br>
	<section>
		<div>
			<?php
				date_default_timezone_set('America/Sao_Paulo');
				$tabela = '';
				$hora = date('H');
				$minuto = date('i');

				include('table.php');

				echo 'Agora são ' . $hora .'h'. $minuto .' e você está no curso de:<br><br>';
				echo table();
			?>
		</div>
		<div>
			<a href="javascript:history.go(-1)">Voltar</a>
		</div>
	</section>
	<br>
	<footer>&copy; 2022 &middot; Pedro Gil &middot; 1° Semestre</footer><br>
</body>
</html>