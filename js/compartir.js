const $btn = document.querySelector('#btn_comp')
$btn.addEventListener('click', share)
if('share' in navigator){
    function share(){
        navigator.share({
            title: 'Portafolios Juan A.Falco',
            text: 'Bienvenidos a mi Portafolios',
            url:'../img/juan_foto2.jpg',
        })
        // .then(() => {
        //     alert('El portafolio se esta compartiendo')
        // })
        // .catch(() =>{
        //     alert('Error al compartir el portafolios')
        // })
    }
}
