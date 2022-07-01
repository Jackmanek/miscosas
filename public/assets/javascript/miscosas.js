
var motiva = document.querySelector('#motiva');
var derecha = document.querySelector('.izquierda');
let frases = ["«La suerte de tu día depende de cómo lo afrontes desde primera hora de la mañana»",
"«Cuida esos primeros minutos como la semilla de tu día, porque eso es lo que son. No los contamines mirando el correo ni las redes sociales.»",
"«Sé el cambio que quieres ver en el mundo» — Gandhi",
"«Qué maravilloso es que nadie tenga que esperar ni un segundo para empezar a mejorar el mundo» — Ana Frank","«El pesimista ve dificultades en cada oportunidad. El optimista ve oportunidades en cada dificultad» —Winston Churchill","«Muchos piensan en cambiar el mundo, pero casi nadie piensa en cambiarse a sí mismo» — Leon Tolstoi","«Si estás trabajando en algo que te importa de verdad, nadie tiene que empujarte: tu visión te empuja» — Steve Jobs"];
let randoF = Math.floor(Math.random()*frases.length+0);
let buffer 	= [];
let datos = [];
let paginaActual = 0;
let paginasTotales;
let longitudPagina 	= 6;
const selProvincia = document.querySelector("#selProvincia");

const verMas = document.querySelector("#verMas");
const medio_jas	 = document.querySelector("#cubo");

// Funcion FRASES ALEATORIOAS 

function hola(){
    motiva.innerText = frases[randoF];
};

derecha.addEventListener('click', function(){
    let randoF = Math.floor(Math.random()*frases.length+0);
    motiva.innerText = frases[randoF];
});
hola();

/////////////////////////////////////////////////////////////

function ofertasLanbide(datos){
    // console.log(datos);
   //...
   let subconjunto =[];
   for (var i=0; i<6; i++){
       subconjunto.push(datos[i]);
   }
   subconjunto = subconjunto.filter(function(elemento){
        
        return elemento.provincia = "GIPUZKOA";
    });

   // llamamos a la funcion dibuja()
   dibuja(subconjunto);
}


function dibuja(datos){
    let medio_jas = document.querySelector(".medio-jas");
    /*medio_jas.innerHTML="";*/

    for(let item of datos){
        medio_jas.innerHTML +=`
        <article>
            <div class="dentro">
                <h3>${item.desEmpleo}</h3>
                <hr>
                <p>${item.desPuesto}</p>
                <hr>
                <p>${item.provincia},${item.municipio}</p>
                <hr>
                <p>${item.fecPub}, <a href="${item.url}">Ver mas..</a></p>
            </div>
        </article>`
    }


}