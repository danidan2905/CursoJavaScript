(function(){

    function actualizarHora(){

        var fecha = new Date();

        var horas = fecha.getHours(),
            minutos = fecha.getMinutes(),
            segundos = fecha.getSeconds(),
            diaSemana = fecha.getDay(),
            dia = fecha.getDate(),
            mes = fecha.getMonth(),
            año = fecha.getFullYear(),
            ampm = 0;

        var pHoras = document.getElementById("horas"),
            pMinutos = document.getElementById("minutos"),
            pAMPM = document.getElementById("ampm"),
            pSegundos = document.getElementById("segundos"),
            pDiaSemana = document.getElementById("diaSemana"),
            pDia = document.getElementById("dia"),
            pMes = document.getElementById("mes"),
            pAño = document.getElementById("año");

        var semana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

        pDiaSemana.textContent = semana[diaSemana];

        pDia.textContent = dia;

        var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

        pMes.textContent = meses[mes];

        pAño.textContent = año;

        if (horas >= 12){
            horas = horas - 12;
            ampm = "PM";
        }
        if (horas === 0){
            horas = 12;
        }
        else{
            ampm = "AM";
        }

        pHoras.textContent = horas;

        pAMPM.textContent = ampm;

        if (minutos < 10){
            minutos = "0" + minutos;
        }

        if (segundos < 10){
            segundos = "0" + segundos;
        }

        pMinutos.textContent = minutos;

        pSegundos.textContent = segundos;

    };

    actualizarHora();

    setInterval(actualizarHora, "1000");

}())