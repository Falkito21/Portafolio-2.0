document.addEventListener("DOMContentLoaded", function() {
const $btn = document.querySelector('#btn_comp')
$btn.addEventListener('click', share)
if('share' in navigator){
    function share(){
        navigator.share({
            title: 'Portafolios Juan A.Falco',
            text: 'Bienvenidos a mi Portafolios',
            url:'https://portafolio-juan-falco.netlify.app/'
        })
        .then(() => {
            alert('Gracias por compartir!')
        })
        .catch(() =>{
            alert('Error al compartir el portafolios')
        })
    }
}
});