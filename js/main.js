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