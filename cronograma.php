<!DOCTYPE html>
<html lang="pt-br">
<head>
	<meta charset="utf-8">
	<title>Cronograma</title>
	<link rel="stylesheet" type="text/css" href="estilo.css">
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
	<footer>
		&copy; 2021 <br>
        Pedro Gil
	</footer>
</body>
</html>