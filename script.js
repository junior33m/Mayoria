function verificar (event){
    event.preventDefault();
let edad= document.getElementById("inputEdad").value;
let parrafo= document.getElementById("parrafo")
let div=document.getElementById("contenedor")
let body=document.body

 if(edad <18 ) {
    parrafo.innerText= "dado que tienes" + edad + " años, eres menor de edad"
    div.style.boxShadow= "20px -40px 30px blue";
    body.style.backgroundColor= "green"
    

 } else{
    parrafo.innerText=" dado a que tienes " + edad +" años, eres mayor de edad"
    div.style.boxShadow= "20px -40px 30px white";
    body.style.backgroundColor= "blueviolet"
 }


}
//CLASIFICADOR DE NOTAS ççÇÇÇÇººººªªªªºº          |||||()
