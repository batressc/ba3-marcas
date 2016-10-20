//let that: Worker;

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

