// que horas são?
var data = new Date();
var semana = data.getDay();
var hora = data.getHours();
var minuto = data.getMinutes();

// armazenando campos
var chronos = document.getElementById('relogio');
var qualAula = document.getElementById('qualAula');
var curso = document.getElementById('curso');
var imagem = document.getElementById('imagem');
var professor = document.getElementById('prof');

/* declarando os cursos e professores */

// Informática p/ Internet
var tcc = 'Planejamento e Desenvolvimento de Trabalho de Conclusão de Curso';
var pwii = 'Programação para Web II';
var aw = 'Aplicativos para Web';
var mktw = 'Marketing para Web';
var ei = 'Empreendedorismo e Inovação';
var paw = 'Projeto de Aplicações para Web';
// professores ti
var diog = 'Diógenes Leandro Leite Pereira';
var joelma = 'Joelma Lúcia Sartori Ribeiro';
var jussimar = 'Jussimar Nascimento Leal';
var paulo = 'Paulo Eduardo Silva Montier';
var augusto = 'Augusto Fabiano Abranches';

// Administração
var aps = 'Administração da Produção e Serviços';
var eci = 'Estudos do Comércio Internacional';
var afo = 'Administração Financeira e Ornamentária';
var ing = 'Inglês Instrumental';
var ple = 'Processos Logísticos Empresariais';
var eap = 'Estudos da Administração Pública';
var tiaa = 'Tecnologia da Informação Aplicada à Administração';
var dtcc = 'Desenvolvimento do Trabalho de Conclusão de Curso (TCC)';
// professores adm
var edu = 'Eduardo Pereira Francisco de Souza';
var jean = 'Jean Simões Peixoto';
var well = 'José Wellington da Costa Silva';
var giovanna = 'Giovanna Lettieri';
var moema = 'Moema Setubal de Souza';
var samuel = 'Samuel Joaquim Bergue';

// exibindo o horário
function horas() {

    // deixando a exibição do minuto mais bonitinha
    if (minuto <= 10) { minuto = '0' + minuto }

    chronos.innerHTML = "Agora são " + hora + "h" + minuto + " e está em progresso a seguinte aula:";

    // exibe o curso
    if (hora >= 8 && hora < 16) {
        curso.innerHTML = 'ETIM em Informática p/ Internet';

    } else if (hora == 16 && minuto <= 30) {
        curso.innerHTML = 'ETIM em Informática p/ Internet';

    } else if (hora >= 19 && hora < 23) {
        curso.innerHTML = 'Administração';

    } else if (hora >= 23 || hora < 8) {
        curso.innerHTML = ' ';
        imagem.src = 'descanso.png';
    }
}

// de acordo com o horário, diz em que aula eu estou e o prof que a ministra
switch (semana) {
    case 0: // DOMINGO
        qualAula.innerHTML = 'Hoje não há aulas.'
        imagem.src = 'descanso.png';
    break;

    case 1: // SEGUNDA
        switch (hora) {
        case 8:
            qualAula.innerHTML = tcc;
            professor.innerHTML = 'Os professores Diógenes e Augusto ministram essa aula para você.';
            imagem.src = 'img/diog-augu.png';
        break;
        case 9:
            if (minuto <= 40) {
                qualAula.innerHTML = tcc;
                professor.innerHTML = 'Os professores Diógenes e Augusto ministram essa aula para você.';
                imagem.src = 'img/diog-augu.png';
            } else {
                qualAula.innerHTML = 'Não há aula. É intervalo.';
                imagem.src = 'descanso.png';
            }
        break;
        case 10:
            qualAula.innerHTML = pwii;
            professor.innerHTML = 'Os professores Diógenes e Joelma ministram essa aula para você.';
            imagem.src = 'img/diog-joel.png';
        break;
        case 11:
            if (minuto <= 40) {
                qualAula.innerHTML = pwii;
                professor.innerHTML = 'Os professores Diógenes e Joelma ministram essa aula para você.';
                imagem.src = 'img/diog-joel.png';
            } else {
                qualAula.innerHTML = 'História';
                professor.innerHTML = 'A professora Larissa ministra essa aula para você.';
                imagem.src = 'img/larissa.png';
            }
        break;
        case 12:
            if (minuto <= 30) {
                qualAula.innerHTML = 'História';
                professor.innerHTML = 'A professora Larissa ministra essa aula para você.';
                imagem.src = 'img/larissa.png';
            } else {
                qualAula.innerHTML = 'Não há aula. É intervalo.';
                imagem.src = 'descanso.png';
            }
        break;
        case 13:
            qualAula.innerHTML = 'Não há aula. É intervalo.';
            imagem.src = 'descanso.png';
        break;
        case 14:
            if (minuto <= 50) {
                qualAula.innerHTML = 'História';
                professor.innerHTML = 'A professora Larissa ministra essa aula para você.';
                imagem.src = 'img/larissa.png';
            } else {
                qualAula.innerHTML = aw;
                professor.innerHTML = 'Os professores Paulo e Jussimar ministram essa aula para você.';
                imagem.src = 'img/juss-paul.png';
            }
        break;
        case 15:
            qualAula.innerHTML = aw;
            professor.innerHTML = 'Os professores Paulo e Jussimar ministram essa aula para você.';
            imagem.src = 'img/juss-paul.png';
        break;
        case 16:
            if (minuto <= 30) {
                qualAula.innerHTML = aw;
                professor.innerHTML = 'Os professores Paulo e Jussimar ministram essa aula para você.';
                imagem.src = 'img/juss-paul.png';
            } else {
                qualAula.innerHTML = 'Não há aula. É intervalo.';
                imagem.src = 'descanso.png';
            }
        break;
        case 17:
            if (minuto <= 40) {
                qualAula.innerHTML = 'Não há aula. É intervalo.';
                imagem.src = 'descanso.png';
            } else {
                qualAula.innerHTML = 'Não há aula. É intervalo.';
                imagem.src = 'descanso.png';
            }
        break;
        case 18:
            if (minuto <= 40) {
                qualAula.innerHTML = 'Não há aula. É intervalo.';
                imagem.src = 'descanso.png';
            } else {
                qualAula.innerHTML = 'Não há aula. É intervalo.';
                imagem.src = 'descanso.png';
            }
        break;
        // aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        case 19:
            if (minuto <= 45) {
                qualAula.innerHTML = dtcc;
                professor.innerHTML = 'A professora '+ moema.split(' ')[0] +' ministra essa aula para você.';
                imagem.src = 'img/moema.png';
            } else {
                qualAula.innerHTML = dtcc;
                professor.innerHTML = 'A professora '+ moema.split(' ')[0] +' ministra essa aula para você.';
                imagem.src = 'img/moema.png';
            }
        break;
        case 20:
            if (minuto <= 30) {
                qualAula.innerHTML = dtcc;
                professor.innerHTML = 'A professora '+ moema.split(' ')[0] +' ministra essa aula para você.';
                imagem.src = 'img/moema.png';
            } else {
                qualAula.innerHTML = dtcc;
                professor.innerHTML = 'A professora '+ moema.split(' ')[0] +' ministra essa aula para você.';
                imagem.src = 'img/moema.png';
            }
        break;
        case 21:
            if (minuto <= 30) {
                qualAula.innerHTML = dtcc;
                professor.innerHTML = 'A professora '+ moema.split(' ')[0] +' ministra essa aula para você.';
                imagem.src = 'img/moema.png';
            } else {
                qualAula.innerHTML = afo;
                professor.innerHTML = 'O professoro '+ edu.split(' ')[0] +' ministra essa aula para você.';
                imagem.src = 'img/edu.png';
            }
        break;
        case 22:
            if (minuto <= 15) {
                qualAula.innerHTML = afo;
                professor.innerHTML = 'O professoro '+ edu.split(' ')[0] +' ministra essa aula para você.';
                imagem.src = 'img/edu.png';
            } else {
                qualAula.innerHTML = afo;
                professor.innerHTML = 'O professoro '+ edu.split(' ')[0] +' ministra essa aula para você.';
                imagem.src = 'img/edu.png';
            }
        break;
        case 23:
            qualAula.innerHTML = 'Não há mais aulas hoje.';
            imagem.src = 'descanso.png';
            }
        break;
        default:
            qualAula.innerHTML = 'Não há aula.';
            imagem.src = 'descanso.png';
        break;
    //}
    break;
    case 2: // TERÇA
        switch (hora) {
        case 8:
            if (minuto >= 50) {
                qualAula.innerHTML = mktw;
                professor.innerHTML = 'A professora '+ joelma.split(' ')[0] +' ministra essa aula para você.';
                imagem.src = 'img/joelma.png';
            } else {
                qualAula.innerHTML = ei;
                professor.innerHTML = 'A professora '+ joelma.split(' ')[0] +' ministra essa aula para você.';
                imagem.src = 'img/joelma.png';
            }
        break;
        case 9:
            if (minuto <= 40) {
                qualAula.innerHTML = ei;
                professor.innerHTML = 'A professora '+ joelma.split(' ')[0] +' ministra essa aula para você.';
                imagem.src = 'img/joelma.png';
            } else {
                qualAula.innerHTML = 'Não há aula. É intervalo.';
            }
        break;
        case 10:
            if (minuto <= 50) {
                qualAula.innerHTML = paw;
                professor.innerHTML = 'Os professores '+ diog.split(' ')[0] +' e '+ augusto.split(' ')[0] +' ministram essa aula para você.';
                imagem.src = 'img/diog-augu.png';
            } else {
                qualAula.innerHTML = paw;
                professor.innerHTML = 'Os professores '+ diog.split(' ')[0] +' e '+ augusto.split(' ')[0] +' ministram essa aula para você.';
                imagem.src = 'img/diog-augu.png';
            }
        break;
        case 11:
            if (minuto <= 40) {
                qualAula.innerHTML = paw;
                professor.innerHTML = 'Os professores '+ diog.split(' ')[0] +' e '+ augusto.split(' ')[0] +' ministram essa aula para você.';
                imagem.src = 'img/diog-augu.png';
            } else {
                qualAula.innerHTML = 'Língua Portuguesa e Literatura';
                professor.innerHTML = 'A professora Viviane ministra essa aula para você.';
                imagem.src = 'img/viviane.png';
            }
        break;
        case 12:
            if (minuto <= 30) {
                qualAula.innerHTML = 'Língua Portuguesa e Literatura';
                professor.innerHTML = 'A professora Viviane ministra essa aula para você.';
                imagem.src = 'img/viviane.png';
            } else {
                qualAula.innerHTML = 'Não há aula. É intervalo.';
                imagem.src = 'descanso.png';
            }
        break;
        case 13:
            qualAula.innerHTML = 'Não há aula. É intervalo.';
            imagem.src = 'descanso.png';
        break;
        case 14:
            if (minuto <= 50) {
                qualAula.innerHTML = 'Língua Portuguesa e Literatura';
                professor.innerHTML = 'A professora Viviane ministra essa aula para você.';
                imagem.src = 'img/viviane.png';
            } else {
                qualAula.innerHTML = 'Matemática';
                professor.innerHTML = 'O professor Amauri ministra esta aula para você.';
                imagem.src = 'img/amauri.png';
            }
        break;
        case 15:
            if (minuto <= 40) {
                qualAula.innerHTML = 'Matemática';
                professor.innerHTML = 'O professor Amauri ministra esta aula para você.';
                imagem.src = 'img/amauri.png';
            } else {
                qualAula.innerHTML = 'Não há aula. É intervalo.';
                imagem.src = 'descanso.png';
            }
        break;
        case 16:
            if (minuto <= 30) {
                qualAula.innerHTML = 'Não há aula. É intervalo.';
                imagem.src = 'descanso.png';
            } else {
                qualAula.innerHTML = 'Não há aula. É intervalo.';
                imagem.src = 'descanso.png';
            }
        break;
        case 17:
            if (minuto <= 40) {
                qualAula.innerHTML = 'Não há aula. É intervalo.';
                imagem.src = 'descanso.png';
            } else {
                qualAula.innerHTML = 'Não há aula. É intervalo.';
                imagem.src = 'descanso.png';
            }
        break;
        case 18:
            if (minuto <= 40) {
                qualAula.innerHTML = 'Não há aula. É intervalo.';
                imagem.src = 'descanso.png';
            } else {
                qualAula.innerHTML = 'Não há aula. É intervalo.';
                imagem.src = 'descanso.png';
            }
        break;
        // aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        case 19:
            if (minuto <= 45) {
                qualAula.innerHTML = eci;
                professor.innerHTML = 'A professora '+ moema.split(' ')[0] +' ministra essa aula para você.';
                imagem.src = 'img/moema.png';
            } else {
                qualAula.innerHTML = eci;
                professor.innerHTML = 'A professora '+ moema.split(' ')[0] +' ministra essa aula para você.';
                imagem.src = 'img/moema.png';
            }
        break;
        case 20:
            if (minuto <= 30) {
                qualAula.innerHTML = eci;
                professor.innerHTML = 'A professora '+ moema.split(' ')[0] +' ministra essa aula para você.';
                imagem.src = 'img/moema.png';
            } else {
                qualAula.innerHTML = eci;
                professor.innerHTML = 'A professora '+ moema.split(' ')[0] +' ministra essa aula para você.';
                imagem.src = 'img/moema.png';
            }
        break;
        case 21:
            if (minuto <= 30) {
                qualAula.innerHTML = eci;
                professor.innerHTML = 'A professora '+ moema.split(' ')[0] +' ministra essa aula para você.';
                imagem.src = 'img/moema.png';
            } else {
                qualAula.innerHTML = afo;
                professor.innerHTML = 'O professor '+ edu.split(' ')[0] +' ministra essa aula para você.';
                imagem.src = 'img/edu.png';
            }
        break;
        case 22:
            if (minuto <= 15) {
                qualAula.innerHTML = afo;
                professor.innerHTML = 'O professor '+ edu.split(' ')[0] +' ministra essa aula para você.';
                imagem.src = 'img/edu.png';
            } else {
                qualAula.innerHTML = afo;
                professor.innerHTML = 'O professor '+ edu.split(' ')[0] +' ministra essa aula para você.';
                imagem.src = 'img/edu.png';
            }
        break;
        case 23:
            qualAula.innerHTML = 'Não há mais aulas hoje.';
            imagem.src = 'descanso.png';
        break;
        default:
            qualAula.innerHTML = 'Não há aula. É intervalo.';
            imagem.src = 'descanso.png';
        break;
    }
    break;

    case 3: // QUARTA
        switch (hora) {
        case 8:
            if (minuto >= 50) {
                qualAula.innerHTML = 'Língua Portuguesa e Literatura';
                professor.innerHTML = 'A professora Viviane ministra essa aula para você.';
                imagem.src = 'img/viviane.png';
            } else {
                qualAula.innerHTML = 'Língua Portuguesa e Literatura';
                professor.innerHTML = 'A professora Viviane ministra essa aula para você.';
                imagem.src = 'img/viviane.png';
            }
        break;
        case 9:
            if (minuto <= 40) {
                qualAula.innerHTML = 'Língua Portuguesa e Literatura';
                professor.innerHTML = 'A professora Viviane ministra essa aula para você.';
                imagem.src = 'img/viviane.png';
            } else {
                qualAula.innerHTML = 'Não há aula. É intervalo.';
                imagem.src = 'descanso.png';
            }
        break;
        case 10:
            if (minuto <= 50) {
                qualAula.innerHTML = 'Matemática';
                professor.innerHTML = 'O professor Amauri ministra essa aula para você.';
                imagem.src = 'img/amauri.png';
            } else {
                qualAula.innerHTML = 'Matemática';
                professor.innerHTML = 'O professor Amauri ministra essa aula para você.';
                imagem.src = 'img/amauri.png';
            }
        break;
        case 11:
            if (minuto <= 40) {
                qualAula.innerHTML = 'Matemática';
                professor.innerHTML = 'O professor Amauri ministra essa aula para você.';
                imagem.src = 'img/amauri.png';
            } else {
                qualAula.innerHTML = 'Química';
                professor.innerHTML = 'A professora Roseli Zizka ministra essa aula para você.';
                imagem.src = 'img/roseli.png';
            }
        break;
        case 12:
            if (minuto <= 30) {
                qualAula.innerHTML = 'Química';
                professor.innerHTML = 'A professora Roseli Zizka ministra essa aula para você.';
                imagem.src = 'img/roseli.png';
            } else {
                qualAula.innerHTML = 'Não há aula. É intervalo.';
                imagem.src = 'descanso.png';
            }
        break;
        case 13:
            qualAula.innerHTML = 'Não há aula. É intervalo.';
            imagem.src = 'descanso.png';
        break;
        case 14:
            if (minuto <= 50) {
                qualAula.innerHTML = 'Química';
                professor.innerHTML = 'A professora Roseli Zizka ministra essa aula para você.';
                imagem.src = 'img/roseli.png';
            } else {
                qualAula.innerHTML = 'Não há aula. É intervalo.';
                imagem.src = 'descanso.png';
            }
        break;
        case 15:
            if (minuto <= 40) {
                qualAula.innerHTML = 'Não há aula. É intervalo.';
                imagem.src = 'descanso.png';
            } else {
                qualAula.innerHTML = 'Não há aula. É intervalo.';
                imagem.src = 'descanso.png';
            }
        break;
        case 16:
            if (minuto <= 30) {
                qualAula.innerHTML = 'Não há aula. É intervalo.';
                imagem.src = 'descanso.png';
            } else {
                qualAula.innerHTML = 'Não há aula. É intervalo.';
                imagem.src = 'descanso.png';
            }
        break;
        case 17:
            if (minuto <= 40) {
                qualAula.innerHTML = 'Não há aula. É intervalo.';
                imagem.src = 'descanso.png';
            } else {
                qualAula.innerHTML = 'Não há aula. É intervalo.';
                imagem.src = 'descanso.png';
            }
        break;
        case 18:
            if (minuto <= 40) {
                qualAula.innerHTML = 'Não há aula. É intervalo.';
                imagem.src = 'descanso.png';
            } else {
                qualAula.innerHTML = 'Não há aula. É intervalo.';
                imagem.src = 'descanso.png';
            }
        break;
        // aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        case 19:
            if (minuto <= 45) {
                qualAula.innerHTML = afo;
                professor.innerHTML = 'O professor '+ edu.split(' ')[0] +' ministra essa aula para você.';
                imagem.src = 'img/edu.png';
            } else {
                qualAula.innerHTML = afo;
                professor.innerHTML = 'O professor '+ edu.split(' ')[0] +' ministra essa aula para você.';
                imagem.src = 'img/edu.png';
            }
        break;
        case 20:
            if (minuto <= 30) {
                qualAula.innerHTML = afo;
                professor.innerHTML = 'O professor '+ edu.split(' ')[0] +' ministra essa aula para você.';
                imagem.src = 'img/edu.png';
            } else {
                qualAula.innerHTML = ing;
                professor.innerHTML = 'O professor '+ samuel.split(' ')[0] +' ministra essa aula para você.';
                imagem.src = 'img/samuel.png';
            }
        break;
        case 21:
            if (minuto <= 30) {
                qualAula.innerHTML = ing;
                professor.innerHTML = 'O professor '+ samuel.split(' ')[0] +' ministra essa aula para você.';
                imagem.src = 'img/samuel.png';
            } else {
                qualAula.innerHTML = aps;
                professor.innerHTML = 'O professor '+ jean.split(' ')[0] +' ministra essa aula para você.';
                imagem.src = 'img/jean.png';
            }
        break;
        case 22:
            if (minuto <= 15) {
                qualAula.innerHTML = aps;
                professor.innerHTML = 'O professor '+ jean.split(' ')[0] +' ministra essa aula para você.';
                imagem.src = 'img/jean.png';
            } else {
                qualAula.innerHTML = aps;
                professor.innerHTML = 'O professor '+ jean.split(' ')[0] +' ministra essa aula para você.';
                imagem.src = 'img/jean.png';
            }
        break;
        default:
            qualAula.innerHTML = 'Não há aula. É intervalo.';
            imagem.src = 'descanso.png';
        break;
    }
    break;
    
    case 4: // QUINTA
        switch (hora) {
        case 8:
            if (minuto >= 50) {
                qualAula.innerHTML = 'Educação Física';
                professor.innerHTML = 'O professor Willians ministra essa aula para você.';
                imagem.src = 'img/willians.png';
            } else {
                qualAula.innerHTML = 'Educação Física';
                professor.innerHTML = 'O professor Willians ministra essa aula para você.';
                imagem.src = 'img/willians.png';
            }
        break;
        case 9:
            if (minuto <= 40) {
                qualAula.innerHTML = 'Educação Física';
                professor.innerHTML = 'O professor Willians ministra essa aula para você.';
                imagem.src = 'img/willians.png';
            } else {
                qualAula.innerHTML = 'Não há aula. É intervalo.';
            }
        break;
        case 10:
            if (minuto <= 50) {
                qualAula.innerHTML = 'Física';
                professor.innerHTML = 'A professora Valéria ministra esta aula para você.';
                imagem.src = 'img/valeria.png';
            } else {
                qualAula.innerHTML = 'Física';
                professor.innerHTML = 'A professora Valéria ministra esta aula para você.';
                imagem.src = 'img/valeria.png';
            }
        break;
        case 11:
            if (minuto <= 40) {
                qualAula.innerHTML = 'Física';
                professor.innerHTML = 'A professora Valéria ministra essa aula para você.';
                imagem.src = 'img/valeria.png';
            } else {
                qualAula.innerHTML = 'Filosofia';
                professor.innerHTML = 'A professora Larissa ministra essa aula para você.';
                imagem.src = 'img/larissa.png';
            }
        break;
        case 12:
            if (minuto <= 30) {
                qualAula.innerHTML = 'Filosofia';
                professor.innerHTML = 'A professora Larissa ministra essa aula para você.';
                imagem.src = 'img/larissa.png';
            } else {
                qualAula.innerHTML = 'Não há aula. É intervalo.';
                imagem.src = 'descanso.png';
            }
        break;
        case 13:
            qualAula.innerHTML = 'Não há aula. É intervalo.';
            imagem.src = 'descanso.png';
        break;
        case 14:
            if (minuto <= 50) {
                qualAula.innerHTML = 'Biologia';
                professor.innerHTML = 'O professor Thiago ministra essa aula para você.';
                imagem.src = 'img/thiago.png';
            } else {
                qualAula.innerHTML = 'Biologia';
                professor.innerHTML = 'O professor Thiago ministra essa aula para você.';
                imagem.src = 'img/thiago.png';
            }
        break;
        case 15:
            if (minuto <= 40) {
                qualAula.innerHTML = 'Biologia';
                professor.innerHTML = 'O professor Thiago ministra essa aula para você.';
                imagem.src = 'img/thiago.png';
            } else {
                qualAula.innerHTML = 'Não há aula. É intervalo.';
                imagem.src = 'descanso.png';
            }
        break;
        case 16:
            if (minuto <= 30) {
                qualAula.innerHTML = 'Não há aula. É intervalo.';
                imagem.src = 'descanso.png';
            } else {
                qualAula.innerHTML = 'Não há aula. É intervalo.';
                imagem.src = 'descanso.png';
            }
        break;
        case 17:
            if (minuto <= 40) {
                qualAula.innerHTML = 'Não há aula. É intervalo.';
                imagem.src = 'descanso.png';
            } else {
                qualAula.innerHTML = 'Não há aula. É intervalo.';
                imagem.src = 'descanso.png';
            }
        break;
        case 18:
            if (minuto <= 40) {
                qualAula.innerHTML = 'Não há aula. É intervalo.';
                imagem.src = 'descanso.png';
            } else {
                qualAula.innerHTML = 'Não há aula. É intervalo.';
                imagem.src = 'descanso.png';
            }
        break;
        // aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        case 19:
            if (minuto <= 45) {
                qualAula.innerHTML = ing;
                professor.innerHTML = 'O professor '+ samuel.split(' ')[0] +' ministra essa aula para você';
                imagem.src = 'img/samuel.png';
            } else {
                qualAula.innerHTML = ple;
                professor.innerHTML = 'A professora '+ giovanna.split(' ')[0] +' ministra essa aula para você';
                imagem.src = 'img/giovanna.png';
            }
        break;
        case 20:
            if (minuto <= 30) {
                qualAula.innerHTML = ple;
                professor.innerHTML = 'A professora '+ giovanna.split(' ')[0] +' ministra essa aula para você';
                imagem.src = 'img/giovanna.png';
            } else {
                qualAula.innerHTML = ple;
                professor.innerHTML = 'A professora '+ giovanna.split(' ')[0] +' ministra essa aula para você';
                imagem.src = 'img/giovanna.png';
            }
        break;
        case 21:
            if (minuto <= 30) {
                qualAula.innerHTML = ple;
                professor.innerHTML = 'A professora '+ giovanna.split(' ')[0] +' ministra essa aula para você';
                imagem.src = 'img/giovanna.png';
            } else {
                qualAula.innerHTML = ple;
                professor.innerHTML = 'A professora '+ giovanna.split(' ')[0] +' ministra essa aula para você';
                imagem.src = 'img/giovanna.png';
            }
        break;
        case 22:
            if (minuto <= 15) {
                qualAula.innerHTML = ple;
                professor.innerHTML = 'A professora '+ giovanna.split(' ')[0] +' ministra essa aula para você';
                imagem.src = 'img/giovanna.png';
            } else {
                qualAula.innerHTML = ple;
                professor.innerHTML = 'A professora '+ giovanna.split(' ')[0] +' ministra essa aula para você';
                imagem.src = 'img/giovanna.png';
            }
        break;
        case 23:
            qualAula.innerHTML = 'Não há mais aulas hoje.';
            imagem.src = 'descanso.png';
        break;
        default:
            qualAula.innerHTML = 'Não há aula. É intervalo.';
            imagem.src = 'descanso.png';
        break;
    }
    break;

    case 5: // SEXTA
        switch (hora) {
        case 8:
            if (minuto >= 50) {
                qualAula.innerHTML = pwii;
                professor.innerHTML = 'Os professores Diógenes e Joelma ministram essa aula para você.';
                imagem.src = 'img/diog-joel.png';
            } else {
                qualAula.innerHTML = pwii;
                professor.innerHTML = 'Os professores Diógenes e Joelma ministram essa aula para você.';
                imagem.src = 'img/diog-joel.png';
            }
        break;
        case 9:
            if (minuto <= 40) {
                qualAula.innerHTML = pwii;
                professor.innerHTML = 'Os professores Diógenes e Joelma ministram essa aula para você.';
                imagem.src = 'img/diog-joel.png';
            } else {
                qualAula.innerHTML = 'Não há aula. É intervalo.';
                imagem.src = 'descanso.png';
            }
        break;
        case 10:
            if (minuto <= 50) {
                qualAula.innerHTML = 'Matemática';
                professor.innerHTML = 'O professor Amauri ministra essa aula para você';
                imagem.src = 'img/amauri.png';
            } else {
                qualAula.innerHTML = 'Inglês';
                professor.innerHTML = 'O professor '+ samuel.split(' ')[0] +' ministra essa aula para você';
                imagem.src = 'img/samuel.png';
            }
        break;
        case 11:
            if (minuto <= 40) {
                qualAula.innerHTML = 'Inglês';
                professor.innerHTML = 'O professor '+ samuel.split(' ')[0] +' ministra essa aula para você';
                imagem.src = 'img/samuel.png';
            } else {
                qualAula.innerHTML = 'Inglês';
                professor.innerHTML = 'O professor '+ samuel.split(' ')[0] +' ministra essa aula para você';
                imagem.src = 'img/samuel.png';
            }
        break;
        case 12:
            if (minuto <= 30) {
                qualAula.innerHTML = 'Inglês';
                professor.innerHTML = 'O professor '+ samuel.split(' ')[0] +' ministra essa aula para você';
                imagem.src = 'img/samuel.png';
            } else {
                qualAula.innerHTML = 'Não há aula. É intervalo.';
                imagem.src = 'descanso.png';
            }
        break;
        case 13:
            qualAula.innerHTML = 'Não há aula. É intervalo.';
            imagem.src = 'descanso.png';
        break;
        case 14:
            if (minuto <= 50) {
                professor.innerHTML = 'A professora Larissa ministra essa aula para você.';
                qualAula.innerHTML = 'Sociologia';
                imagem.src = 'img/larissa.png';
            } else {
                qualAula.innerHTML = 'Geografia';
                professor.innerHTML = 'O professor Rodrigo Ferraz ministra essa aula para você';
                imagem.src = 'img/rodrigo.png';
            }
        break;
        case 15:
            if (minuto <= 40) {
                qualAula.innerHTML = 'Geografia';
                professor.innerHTML = 'O professor Rodrigo Ferraz ministra essa aula para você';
                imagem.src = 'img/rodrigo.png';
            } else {
                qualAula.innerHTML = 'Geografia';
                professor.innerHTML = 'O professor Rodrigo Ferraz ministra essa aula para você';
                imagem.src = 'img/rodrigo.png';
            }
        break;
        case 16:
            if (minuto <= 30) {
                qualAula.innerHTML = 'Geografia';
                professor.innerHTML = 'O professor Rodrigo Ferraz ministra essa aula para você';
                imagem.src = 'img/rodrigo.png';
            } else {
                qualAula.innerHTML = 'Não há aula. É intervalo.';
                imagem.src = 'descanso.png';
            }
        break;
        case 17:
            if (minuto <= 40) {
                qualAula.innerHTML = 'Não há aula. É intervalo.';
                imagem.src = 'descanso.png';
            } else {
                qualAula.innerHTML = 'Não há aula. É intervalo.';
                imagem.src = 'descanso.png';
            }
        break;
        case 18:
            if (minuto <= 40) {
                qualAula.innerHTML = 'Não há aula. É intervalo.';
                imagem.src = 'descanso.png';
            } else {
                qualAula.innerHTML = 'Não há aula. É intervalo.';
                imagem.src = 'descanso.png';
            }
        break;
        // aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        case 19:
            if (minuto <= 45) {
                qualAula.innerHTML = eap;
                professor.innerHTML = 'O professor '+ jean.split(' ')[0] +'  ministra essa aula para você.';
                imagem.src = 'img/jean.png';
            } else {
                qualAula.innerHTML = eap;
                professor.innerHTML = 'O professor '+ jean.split(' ')[0] +'  ministra essa aula para você.';
                imagem.src = 'img/jean.png';
            }
        break;
        case 20:
            if (minuto <= 30) {
                qualAula.innerHTML = eap;
                professor.innerHTML = 'O professor '+ jean.split(' ')[0] +'  ministra essa aula para você.';
                imagem.src = 'img/jean.png';
            } else {
                qualAula.innerHTML = tiaa;
                professor.innerHTML = 'O professor '+ well.split(' ')[0] +'  ministra essa aula para você.';
                imagem.src = 'img/well.png';
            }
        break;
        case 21:
            if (minuto <= 30) {
                qualAula.innerHTML = tiaa;
                professor.innerHTML = 'O professor '+ well.split(' ')[0] +'  ministra essa aula para você.';
                imagem.src = 'img/well.png';
            } else {
                qualAula.innerHTML = tiaa;
                professor.innerHTML = 'O professor '+ well.split(' ')[0] +'  ministra essa aula para você.';
                imagem.src = 'img/well.png';
            }
        break;
        case 22:
            if (minuto <= 15) {
                qualAula.innerHTML = tiaa;
                professor.innerHTML = 'O professor '+ well.split(' ')[0] +'  ministra essa aula para você.';
                imagem.src = 'img/well.png';
            } else {
                qualAula.innerHTML = tiaa;
                professor.innerHTML = 'O professor '+ well.split(' ')[0] +'  ministra essa aula para você.';
                imagem.src = 'img/well.png';
            }
        break;
        case 23:
            qualAula.innerHTML = 'Não há mais aulas hoje.';
            imagem.src = 'descanso.png';
        break;
        default:
            if (hora >= 23) {
                qualAula.innerHTML = 'Já não há mais aulas hoje. Descanse um pouco.';
                imagem.src = 'descanso.png';
            } else {
                qualAula.innerHTML = 'As aulas iniciarão às 8h. Até lá, descanse.';
                imagem.src = 'descanso.png';
            }
        break;
    }
    break;

    case 6: // SÁBADO
        qualAula.innerHTML = 'Não há aula hoje, a não ser que haja reposição de aulas ou algum evento extracurricular (feira de ciências, Etec Fest etc.).';
        imagem.src = 'descanso.png';
    break;
}
//}