/**
 * PWA - Flex
 * @author João Fonseca
 * @link https://Fonseca-J.com.br/
 */

// Registrar o ServiceWorker > > > > > > > > > > > > > > > > > > >
// se o SW estiver disponível no navegador
if('serviceWorker' in navigator) {
    navigator.serviceWorker
    .register('/sw.js')
    .then(() => {
        console.log("Service Worker registrado.")
    })
}
// < < < < < < < < < < < < < < < < < < < < < < < < < < < < < < < < 

function calcular() {
    // pegar valores dos inputs
    let gasolina = Number(document.getElementById('gasolina').value)
    let etanol = Number(document.getElementById('etanol').value)
    let kmlGasolina = Number(document.getElementById('kmGasolina').value)
    let kmlEtanol = Number(document.getElementById('kmEtanol').value)
    // calcular a vantagem
    if (etanol < (kmlEtanol / kmlGasolina) * gasolina) {
        document.getElementById("status").src = "./img/etanol.png"
    } else {
        document.getElementById("status").src = "./img/gasolina.png"
    }

}