window.onscroll = function (){  
    // En la variable scroll se almacena la posición cada vez que se mueve el scroll
    var scroll = document.documentElement.scrollTop || document.body.scrollTop;
    const idFotos = document.getElementById("idFotos");
    const idYo = document.getElementById("idYo");
    const idPersonales = document.getElementById("idPersonales");
    const idAcademicos = document.getElementById("idAcademicos");
    const idProyectos = document.getElementById("idProyectos");
    const idRedes = document.getElementById("idRedes");
    // Con este código puedes hacer que algo suceda entre la posición 300 y 400
    if(scroll >= 0 && scroll <= 460){
        idFotos.classList.remove("lblFotosOculta");
        idFotos.classList.add("lblFotos");
        //Intercambio de clases 
        idYo.classList.remove("lblYo");
        idYo.classList.add("lblYoOculta");
        //Intercambio de clases 
        idPersonales.classList.remove("lblPersonales");
        idPersonales.classList.add("lblPersonalesOculta");
         //Intercambio de clases 
        idAcademicos.classList.remove("lblAcademicos");
        idAcademicos.classList.add("lblAcademicosOculta");
         //Intercambio de clases 
        idProyectos.classList.remove("lblProyectos");
        idProyectos.classList.add("lblProyectosOculta");
         //Intercambio de clases 
        idRedes.classList.remove("lblRedes");
        idRedes.classList.add("lblRedesOculta");
    }else if(scroll > 460 && scroll <= 1040){
        idFotos.classList.remove("lblFotos");
        idFotos.classList.add("lblFotosOculta");
        //Intercambio de clases 
        idYo.classList.remove("lblYoOculta");
        idYo.classList.add("lblYo");
        //Intercambio de clases 
        idPersonales.classList.remove("lblPersonales");
        idPersonales.classList.add("lblPersonalesOculta");
         //Intercambio de clases 
        idAcademicos.classList.remove("lblAcademicos");
        idAcademicos.classList.add("lblAcademicosOculta");
         //Intercambio de clases 
        idProyectos.classList.remove("lblProyectos");
        idProyectos.classList.add("lblProyectosOculta");
         //Intercambio de clases 
        idRedes.classList.remove("lblRedes");
        idRedes.classList.add("lblRedesOculta");
    }else if(scroll > 1040 && scroll <= 1628){
        idFotos.classList.remove("lblFotos");
        idFotos.classList.add("lblFotosOculta");
        //Intercambio de clases 
        idYo.classList.remove("lblYo");
        idYo.classList.add("lblYoOculta");
        //Intercambio de clases 
        idPersonales.classList.remove("lblPersonalesOculta");
        idPersonales.classList.add("lblPersonales");
         //Intercambio de clases 
        idAcademicos.classList.remove("lblAcademicos");
        idAcademicos.classList.add("lblAcademicosOculta");
         //Intercambio de clases 
        idProyectos.classList.remove("lblProyectos");
        idProyectos.classList.add("lblProyectosOculta");
         //Intercambio de clases 
        idRedes.classList.remove("lblRedes");
        idRedes.classList.add("lblRedesOculta");
    }else if(scroll > 1628 && scroll <= 2212){
        idFotos.classList.remove("lblFotos");
        idFotos.classList.add("lblFotosOculta");
        //Intercambio de clases 
        idYo.classList.remove("lblYo");
        idYo.classList.add("lblYoOculta");
        //Intercambio de clases 
        idPersonales.classList.remove("lblPersonales");
        idPersonales.classList.add("lblPersonalesOculta");
         //Intercambio de clases 
        idAcademicos.classList.remove("lblAcademicosOculta");
        idAcademicos.classList.add("lblAcademicos");
         //Intercambio de clases 
        idProyectos.classList.remove("lblProyectos");
        idProyectos.classList.add("lblProyectosOculta");
         //Intercambio de clases 
        idRedes.classList.remove("lblRedes");
        idRedes.classList.add("lblRedesOculta")
    }else if(scroll > 2212 && scroll <= 2795){
        idFotos.classList.remove("lblFotos");
        idFotos.classList.add("lblFotosOculta");
        //Intercambio de clases 
        idYo.classList.remove("lblYo");
        idYo.classList.add("lblYoOculta");
        //Intercambio de clases 
        idPersonales.classList.remove("lblPersonales");
        idPersonales.classList.add("lblPersonalesOculta");
         //Intercambio de clases 
        idAcademicos.classList.remove("lblAcademicos");
        idAcademicos.classList.add("lblAcademicosOculta");
         //Intercambio de clases 
        idProyectos.classList.remove("lblProyectosOculta");
        idProyectos.classList.add("lblProyectos");
         //Intercambio de clases 
        idRedes.classList.remove("lblRedes");
        idRedes.classList.add("lblRedesOculta")
    }else{
        idFotos.classList.remove("lblFotos");
        idFotos.classList.add("lblFotosOculta");
        //Intercambio de clases 
        idYo.classList.remove("lblYo");
        idYo.classList.add("lblYoOculta");
        //Intercambio de clases 
        idPersonales.classList.remove("lblPersonales");
        idPersonales.classList.add("lblPersonalesOculta");
         //Intercambio de clases 
        idAcademicos.classList.remove("lblAcademicos");
        idAcademicos.classList.add("lblAcademicosOculta");
         //Intercambio de clases 
        idProyectos.classList.remove("lblProyectos");
        idProyectos.classList.add("lblProyectosOculta");
         //Intercambio de clases 
        idRedes.classList.remove("lblRedesOculta");
        idRedes.classList.add("lblRedes")
    }
}


window.onload = function()
{
    var fotos=document.getElementById("fotos");
    var yo=document.getElementById("yo");
    var personales=document.getElementById("personales");
    var academicos=document.getElementById("academicos");
    var proyectos=document.getElementById("proyectos");
    var redes=document.getElementById("redes");

    fotos.onmouseover = function() {
       a = document.getElementById("idFotos");
       a.classList.add("lblFotos");
       a.classList.remove("lblFotosOculta");
    }
    fotos.onmouseout = function() {
        a = document.getElementById("idFotos");
        a.classList.remove("lblFotos");
        a.classList.add("lblFotosOculta");
    }
    
    yo.onmouseover = function () {
        a = document.getElementById("idYo");
        a.classList.add("lblYo");
        a.classList.remove("lblYoOculta")
    }

    yo.onmouseout = function(){
        a = document.getElementById("idYo");
        a.classList.remove("lblYo");
        a.classList.add("lblYoOculta");
    }
    
    personales.onmouseover = function () {
        a = document.getElementById("idPersonales");
        a.classList.add("lblPersonales");
        a.classList.remove("lblPersonalesOculta")
    }

    personales.onmouseout = function(){
        a = document.getElementById("idPersonales");
        a.classList.remove("lblPersonales");
        a.classList.add("lblPersonalesOculta");
    }

    academicos.onmouseover = function () {
        a = document.getElementById("idAcademicos");
        a.classList.add("lblAcademicos");
        a.classList.remove("lblAcademicosOculta")
    }

    academicos.onmouseout = function(){
        a = document.getElementById("idAcademicos");
        a.classList.remove("lblAcademicos");
        a.classList.add("lblAcademicosOculta");
    }
    
    proyectos.onmouseover = function () {
        a = document.getElementById("idProyectos");
        a.classList.add("lblProyectos");
        a.classList.remove("lblProyectosOculta")
    }

    proyectos.onmouseout = function(){
        a = document.getElementById("idProyectos");
        a.classList.remove("lblProyectos");
        a.classList.add("lblProyectosOculta");
    }

    redes.onmouseover = function () {
        a = document.getElementById("idRedes");
        a.classList.add("lblRedes");
        a.classList.remove("lblRedesOculta")
    }

    redes.onmouseout = function(){
        a = document.getElementById("idRedes");
        a.classList.remove("lblRedes");
        a.classList.add("lblRedesOculta");
    }
}

