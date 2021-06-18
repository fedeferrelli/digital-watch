const reloj_horas = document.getElementById("reloj-horas")
const reloj_segundos = document.getElementById("reloj-segundos")
const digital_clock = document.getElementById("digital-clock")
const reloj_dia_nombre = document.getElementById("reloj-dia-nombre")
const reloj_dia_numero = document.getElementById("reloj-dia-numero")
const reloj_mes = document.getElementById("reloj-mes")
const reloj_anio = document.getElementById("reloj-anio")

function clock(){

  fecha = new Date();

  var dia = fecha.getDate();
  
  var semana=["Domingo","Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"]
  var dia_nombre = semana[fecha.getDay()];

  var mes = fecha.getMonth()+1;

  var mes_nombres=["enero","febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"]
  var mes_nombre = mes_nombres[fecha.getMonth()]
  
  var anio = fecha.getFullYear();
  var hora = fecha.getHours();
  var minutos = fecha.getMinutes();
  var segundos = fecha.getSeconds();


   
  reloj_horas.innerHTML = `${"0"+hora}`.slice(-2)+":"+`${"0"+minutos}`.slice(-2)
  reloj_segundos.innerHTML = `${"0"+segundos}`.slice(-2)
 
  reloj_dia_nombre.innerHTML =`${dia_nombre}`
  reloj_dia_numero.innerHTML =`${"0"+dia}`.slice(-2)
  reloj_mes.innerHTML =`${mes_nombre}`
  reloj_anio.innerHTML =`${anio}`


  var visibilidad = parseInt(hora)*3600+parseInt(minutos)*60+parseInt(segundos)

  body.classList.remove("amanecer", "dia", "anochecer", "noche") 
  
  if(visibilidad>=23400 && visibilidad<30600){
      body.classList.add("amanecer")} 

 else if (visibilidad>=30600 && visibilidad<66600){
    body.classList.add("dia")}

 else if (visibilidad>=66600 && visibilidad<72000){
    body.classList.add("anochecer")}

 else {body.classList.add("noche")}
}

setInterval(clock, 1000);
