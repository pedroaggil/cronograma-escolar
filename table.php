<?php 
	function table() {
		date_default_timezone_set('America/Sao_Paulo');
		$tabela = '';
		$hora = date('H');
		$minuto = date('i');

		if ($hora >= 8 && $hora < 16 || $hora == 16 && $minuto <= 30) {
			echo '<span>Informática p/ Internet</span><br><br>';

		 $tabela = '<table border="1px" cellpadding="5px" cellspacing="0">';
    		$tabela .='<thead>';

    		$tabela .= '<tr>';
    			$tabela .= '<th>Horário</th>';
    			$tabela .= '<th>Segunda</th>';
    			$tabela .= '<th>Terça</th>';
    			$tabela .= '<th>Quarta</th>';
    			$tabela .= '<th>Quinta</th>';
    			$tabela .= '<th>Sexta</th>';
    		$tabela .= '</tr>';

    		$tabela .='</thead>';
    		$tabela .='<tbody>';
    		
    		$tabela .= '<tr>'; // primeira aula
    			$tabela .= '<td>08h</td>';
    			$tabela .= '<td>PDTCC</td>';
    			$tabela .= '<td>MKTW</td>';
    			$tabela .= '<td>LPL</td>';
    			$tabela .= '<td>EDF</td>';
    			$tabela .= '<td>PW II</td>';
    		$tabela .= '</tr>';

    		$tabela .= '<tr>'; // segunda aula
    			$tabela .= '<td>08h50</td>';
    			$tabela .= '<td>PDTCC</td>';
    			$tabela .= '<td>EI</td>';
    			$tabela .= '<td>LPL</td>';
    			$tabela .= '<td>EDF</td>';
    			$tabela .= '<td>PW II</td>';
    		$tabela .= '</tr>';

    		/* aqui há um intervalo de 20 min que não será exibido na tabela */

    		$tabela .= '<tr>'; // terceira aula
    			$tabela .= '<td>10h</td>';
    			$tabela .= '<td>PW II</td>';
    			$tabela .= '<td>PAW</td>';
    			$tabela .= '<td>MAT</td>';
    			$tabela .= '<td>FÍS</td>';
    			$tabela .= '<td>MAT</td>';
    		$tabela .= '</tr>';

    		$tabela .= '<tr>'; // quarta aula
    			$tabela .= '<td>10h50</td>';
    			$tabela .= '<td>PW II</td>';
    			$tabela .= '<td>PAW</td>';
    			$tabela .= '<td>MAT</td>';
    			$tabela .= '<td>FÍS</td>';
    			$tabela .= '<td>ING</td>';
    		$tabela .= '</tr>';

    		$tabela .= '<tr>'; // quinta aula
    			$tabela .= '<td>11h40</td>';
    			$tabela .= '<td>HIS</td>';
    			$tabela .= '<td>LPL</td>';
    			$tabela .= '<td>QUÍ</td>';
    			$tabela .= '<td>FIL</td>';
    			$tabela .= '<td>ING</td>';
    		$tabela .= '</tr>';

    		/* aqui há um intervalo para o almoço de 1h30 que não será exibido na tabela */

    		$tabela .= '<tr>'; // sexta aula
    			$tabela .= '<td>14h</td>';
    			$tabela .= '<td>HIS</td>';
    			$tabela .= '<td>LPL</td>';
    			$tabela .= '<td>QUÍ</td>';
    			$tabela .= '<td>BIO</td>';
    			$tabela .= '<td>SOC</td>';
    		$tabela .= '</tr>';

    		$tabela .= '<tr>'; // sétima aula
    			$tabela .= '<td>14h50</td>';
    			$tabela .= '<td>AW</td>';
    			$tabela .= '<td>MAT</td>';
    			$tabela .= '<td>/////</td>';
    			$tabela .= '<td>BIO</td>';
    			$tabela .= '<td>GEO</td>';
    		$tabela .= '</tr>';

    		$tabela .= '<tr>'; // oitava aula
    			$tabela .= '<td>15h40</td>';
    			$tabela .= '<td>AW</td>';
    			$tabela .= '<td>/////</td>';
    			$tabela .= '<td>/////</td>';
    			$tabela .= '<td>/////</td>';
    			$tabela .= '<td>GEO</td>';
    		$tabela .= '</tr>';
    		
    		$tabela .='</tbody>';
    		$tabela .= '</table>';
	
	} elseif ($hora >= 19 && $hora < 23) {
		echo '<span>Administração</span><br><br>';

		 $tabela = '<table border="1px" cellpadding="5px" cellspacing="0">';
    		$tabela .='<thead>';

    		$tabela .= '<tr>';
    			$tabela .= '<th>Horário</th>';
    			$tabela .= '<th>Segunda</th>';
    			$tabela .= '<th>Terça</th>';
    			$tabela .= '<th>Quarta</th>';
    			$tabela .= '<th>Quinta</th>';
    			$tabela .= '<th>Sexta</th>';
    		$tabela .= '</tr>';

    		$tabela .='</thead>';
    		$tabela .='<tbody>';
    		
    		$tabela .= '<tr>'; // primeira aula
    			$tabela .= '<td>19h</td>';
    			$tabela .= '<td>DTCC</td>';
    			$tabela .= '<td>ECI</td>';
    			$tabela .= '<td>AFO</td>';
    			$tabela .= '<td>ING</td>';
    			$tabela .= '<td>EAP</td>';
    		$tabela .= '</tr>';

    		$tabela .= '<tr>'; // segunda aula
    			$tabela .= '<td>19h45</td>';
    			$tabela .= '<td>DTCC</td>';
    			$tabela .= '<td>ECI</td>';
    			$tabela .= '<td>AFO</td>';
    			$tabela .= '<td>PLE</td>';
    			$tabela .= '<td>EAP</td>';
    		$tabela .= '</tr>';

    		/* aqui há um intervalo de 15 min que não será exibido na tabela */

    		$tabela .= '<tr>'; // terceira aula
    			$tabela .= '<td>20h45</td>';
    			$tabela .= '<td>DTCC</td>';
    			$tabela .= '<td>ECI</td>';
    			$tabela .= '<td>ING</td>';
    			$tabela .= '<td>PLE</td>';
    			$tabela .= '<td>TIAA</td>';
    		$tabela .= '</tr>';

    		$tabela .= '<tr>'; // quarta aula
    			$tabela .= '<td>21h30</td>';
    			$tabela .= '<td>APS</td>';
    			$tabela .= '<td>AFO</td>';
    			$tabela .= '<td>APS</td>';
    			$tabela .= '<td>PLE</td>';
    			$tabela .= '<td>TIAA</td>';
    		$tabela .= '</tr>';

    		$tabela .= '<tr>'; // quinta aula
    			$tabela .= '<td>22h15</td>';
    			$tabela .= '<td>APS</td>';
    			$tabela .= '<td>AFO</td>';
    			$tabela .= '<td>EAP</td>';
    			$tabela .= '<td>PLE</td>';
    			$tabela .= '<td>TIAA</td>';
    		$tabela .= '</tr>';
    		
    		$tabela .='</tbody>';
    		$tabela .= '</table>';
	
	} else {
		echo 'No momento, você não está em nenhum curso.<br><br>';
		$tabela = 'Já está tarde; vá dormir.';

	}
	echo $tabela;
	}

 ?>