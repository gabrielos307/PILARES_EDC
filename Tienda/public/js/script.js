(function(){
    

    var actualizarHora = function (){
        var fecha = new Date(),
        horas = fecha.getHours(), ampm,
        minutos = fecha.getMinutes(),
        segundos = fecha.getSeconds(),
        diaSemana = fecha.getDay(),
        dia = fecha.getDate(),
        mes = fecha.getMonth(),
        year = fecha.getFullYear();

    var pDiaSemana = document.getElementById('diaSemana'),
        pDia = document.getElementById('dia'),
        pMes = document.getElementById('mes'),
        pYear = document.getElementById('year'),
        pHoras = document.getElementById('horas'),
        pMinutos = document.getElementById('minutos'),
        pSegundos = document.getElementById('segundos'),
        pAMPM = document.getElementById('ampm');
        var semana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
        pDiaSemana.textContent=semana[diaSemana];
        if(horas >= 12){
            horas = horas -12;
            ampm = 'PM';
        }else{
            ampm = 'AM';
        };
        if(horas == 0){
            horas =12;
        };
        if(minutos < 10){
            minutos = "0"+ minutos
        };
        if(segundos < 10){
            segundos = "0" + segundos
        };

        pHoras.textContent = horas;
        pMinutos.textContent = minutos;
        pSegundos.textContent = segundos;
        pAMPM.textContent = ampm;
        pDia.textContent = dia;
        pMes.textContent = mes;
        pYear.textContent = year;
    };
    actualizarHora();
    var intervalo = setInterval(actualizarHora, 1000);
}())
var Alerta = function() {
    alert("No pos wau");
};