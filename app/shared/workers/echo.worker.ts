/// <reference path="../../../typings/globals/webworkers/lib.webworker.d.ts" />

if('function' === typeof importScripts) {
    importScripts(
        '../../../node_modules/systemjs/dist/system.src.js',
        '../../../systemjs.config.js');

    let interval: NodeJS.Timer;

    self.addEventListener('message', (ev) => {
        switch (ev.data) {
            case 'stop':
                if (interval) {
                    clearInterval(interval);
                    interval = null;
                }
                break;
            case 'begin':
                if (!interval) {
                    interval  = setInterval(() => {
                        self.postMessage(Date.now().toString());
                    }, 100);
                }
                break;
        }
    }, false);
}