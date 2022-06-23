// BOTON SIDEBAR
const navMenu = document.getElementById('sidebar'),
navToggle = document.getElementById('nav-toggle'),
navCerrar = document.getElementById('nav-cerrar')

if(navToggle){
    navToggle.addEventListener("click", () => {
        navMenu.classList.add('mostrar-sidebar')
    })
}
if(navCerrar){
    navCerrar.addEventListener("click", () => {
        navMenu.classList.remove('mostrar-sidebar')
    })
}

// SKILLS PESTANAS
const pestanas = document.querySelectorAll('[data-target]'),
        pestanaContent = document.querySelectorAll('[data-content]')

        pestanas.forEach(pestana => {
            pestana.addEventListener("click", () => {
                const target = document.querySelector(pestana.dataset.target)

                pestanaContent.forEach(pestanaContent => {
                    pestanaContent.classList.remove('skills_active')
                })
                target.classList.add('skills_active')

                pestanas.forEach(pestana => {
                    pestana.classList.remove('skills_active')
                })
                pestana.classList.add('skills_active')
            })
        })

//          FILTRO MIXITUP PROYECTO 
let mixerProyecto = mixitup('.proyecto_container',{
    selectors:{
        target: '.proyecto_tarjeta'
    },
    animation:{
        duration: 300
    }
});

// LINK ACTIVE PROYECTO

const linkProyecto = document.querySelectorAll('.proyecto_item')

function activeProyecto(){
    linkProyecto.forEach(l => l.classList.remove('active-proyecto'))
    this.classList.add('active-proyecto')
}
linkProyecto.forEach(l => l.addEventListener("click", activeProyecto))

// Proyecto emergente

document.addEventListener("click", (e) => {
    if(e.target.classList.contains("proyecto_boton")){
        toggleProyectoEmergente();
        proyectoItemDetalles(e.target.parentElement);
    }
})
function toggleProyectoEmergente(){
    document.querySelector(".proyecto_emergente").classList.toggle("abrir");
}
document.querySelector(".proyecto_emergente-cerrar").addEventListener("click", toggleProyectoEmergente)

function proyectoItemDetalles(proyectoItem){
    document.querySelector(".pp_miniatura img").src = proyectoItem.querySelector(".proyecto_img").src;
    document.querySelector(".proyecto_emergente-subtitulo span").innerHTML = proyectoItem.querySelector(".proyecto_titulo").innerHTML;
    document.querySelector(".proyecto_emergente-cuerpo").innerHTML = proyectoItem.querySelector(".proyecto_item-datalles").innerHTML;
}

// INPUT ANIMACION
const inputs = document.querySelectorAll(".input");
function focusFunc(){
    let span = this.parentNode;
    span.classList.add("focus");
}
function blurFunc(){
    let span = this.parentNode;
    if(this.value == ""){
        span.classList.remove("focus");
    }
}    
inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc)
    input.addEventListener("blur", blurFunc)
})

// ACTIVACION DE LINKS AL CAMBIAR DE SECCION
const seccion = document.querySelectorAll("section[id]");

window.addEventListener("scroll", navHighlighter);

function navHighlighter(){
    let scrollY = window.pageYOffset;

    seccion.forEach(current => {
        const seccionHeight = current.offsetHeight;
        const seccionTop = current.offsetTop -50,
        seccionId = current.getAttribute("id");

        if(scrollY > seccionTop && scrollY <= seccionTop + seccionHeight)
        {
            document.querySelector('.nav_menu a[href*=' + seccionId + ']').classList.add("active-link")
        }
        else{
            document.querySelector('.nav_menu a[href*=' + seccionId + ']').classList.remove("active-link")
        }
    })
}

