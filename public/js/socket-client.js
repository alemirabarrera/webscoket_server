//referencias del HTML
const lblOnline     =document.querySelector("#lblonline");
const lblOffline    =document.querySelector("#lbloffline");
const textMensaje   =document.querySelector("#textMensaje");
const btnEnviar     =document.querySelector("#btnEnviar");


const socket = io();
socket.on('connect', ()=>{
    //console.log("Conectado");
    lblOffline.style.display = 'none';
    lblOnline.style.display = '';
});
socket.on('disconnect', ()=>{
    //console.log("Desconectado del Server");
    lblOffline.style.display = '';
    lblOnline.style.display = 'none';
});


socket.on('enviar-mensaje', (payload)=>{
    console.log(payload);
})


btnEnviar.addEventListener("click",()=>{
    const mensaje = textMensaje.value;
    const payload = {
        mensaje,
        id: "123ABC",
        fecha: new Date().getTime()
    }
    socket.emit('enviar-mensaje', payload, (id)=>{
        console.log('Desde el server',id);
    });
});