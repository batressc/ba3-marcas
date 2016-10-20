import { Component, OnDestroy }  from '@angular/core';
import './shared/workers/echo.worker.js';

@Component({
    moduleId: module.id,
    selector: 'ba3-marcas',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'] 
})
class AppComponent implements OnDestroy { 
    message: string;
    texto: string;
    work: Worker;

    constructor() {
        this.work = new Worker('app/shared/workers/echo.worker.js');
        this.work.addEventListener('message', (e) => {
            this.message = e.data;
        }, false);
    }

    echoWorker(): void {
        this.work.postMessage('begin');
    }

    stopWorker(): void {
        this.work.postMessage('stop');
    }

    ngOnDestroy(): void {
        this.work.removeEventListener('message');
        this.work.terminate();
    }
}

export { AppComponent };