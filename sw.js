/* SIGEA: sala instalable. No guarda nada en cache: la sala siempre baja lo ultimo. */
self.addEventListener('install',function(){self.skipWaiting();});
self.addEventListener('activate',function(e){e.waitUntil(self.clients.claim());});
self.addEventListener('fetch',function(){});
