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
  var mes = fecha.getMonth()+1;

  var mes_nombres=["enero","febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"]

  var mes_nombre = mes_nombres[fecha.getMonth()]
   

  var anio = fecha.getFullYear();

  var hora = fecha.getHours();
  var minutos = fecha.getMinutes();
  var segundos = fecha.getSeconds();

  var semana=["Domingo","Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"]

  var dia_nombre = semana[fecha.getDay()];

  
  if(dia<10){
   var dia = "0" + dia};

  if(mes<10){
   var mes = "0" + mes};

  if(hora<10){
   var hora = "0" + hora};

  if(minutos<10){
   var minutos = "0" + minutos};

  if(segundos<10){
   var segundos = "0" + segundos};
   
  reloj_horas.innerHTML = `${hora}:${minutos}`
  reloj_segundos.innerHTML = `${segundos}`
 
  reloj_dia_nombre.innerHTML =`${dia_nombre}`
  reloj_dia_numero.innerHTML =`${dia}`
  reloj_mes.innerHTML =`${mes_nombre}`
  reloj_anio.innerHTML =`${anio}`


  var visibilidad = parseInt(hora)*3600+parseInt(minutos)*60+parseInt(segundos)

  body.classList.remove("amanecer", "dia", "anochecer", "noche") 
  if(visibilidad>=23400 && visibilidad<32400){
      body.classList.add("amanecer")} 
 else if (visibilidad>=32400 && visibilidad<66600){
    body.classList.add("dia")}
 else if (visibilidad>=66600 && visibilidad<72000){
    body.classList.add("anochecer")}
 else {body.classList.add("noche")}
    

}



setInterval(clock, 100);
