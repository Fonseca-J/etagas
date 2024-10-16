/**
 *  ServiceWorker
 * @author João Fonseca 
 */

// Instalação do Service Worker
self.addEventListener('install', (event) => {
    console.log("Instalando o ServiceWorker...", event)
    // Pré carregamento em cache
    event.waitUntil(
        // Armazenar em cache
        caches.open('static')
            .then((cache) => {
                console.log("Pré carregamento dos arqui/vos do app")
                cache.add('/etagas/')
                cache.add('/etagas/index.html')
                cache.add('/etagas/style.css')
                cache.add('/etagas/app.js')
                cache.add('/etagas/img/calcflex.png')
                cache.add('/etagas/img/etanol.png')
                cache.add('/etagas/img/gasolina.png')

            })
    )
})

// Ativação do Service Worker
self.addEventListener('activate', (event) => {
    console.log("Ativando o ServiceWorker...", event)
    return self.clients.claim() // Garantir o serviço em todos os documentos do APP
})

// Escutando requisições "buscando algo"
self.addEventListener('fetch', (event) => {
    //console.log("Buscando algo...", event)
    //armazenar em cache todas as requisições (arquivos estáticos pré carregados)
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                if (response) {
                    return response
                } else {
                    return fetch(event.request)
                }
            })
    )
})