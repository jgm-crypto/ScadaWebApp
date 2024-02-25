// src/app/services/websocket.service.ts
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class WebsocketService {
    private webSocket!: WebSocket;

    constructor() { }

    public openWebSocket(msg: string): void {
        this.webSocket = new WebSocket('ws://localhost:3000');

        this.webSocket.onopen = (event) => {
            console.log('Open:', event);
            this.sendMessage(msg);
        };

        this.webSocket.onmessage = (event) => {
            const message = JSON.parse(event.data);
            console.log('Message:', message);
        };

        this.webSocket.onclose = (event) => {
            console.log('Close:', event);
        };

        this.webSocket.onerror = (event) => {
            console.error('WebSocket error:', event);
        };
    }

    // Servicio Angular para manejar WebSockets 
    public onMessage(): Observable<any> {
        return new Observable(observer => {
            this.webSocket.onmessage = (event) => {
                const data = JSON.parse(event.data);
                observer.next(data);
            };
        });
    }


    public sendMessage(msg: string): void {
        if (this.webSocket.readyState === WebSocket.OPEN) {
            console.log(msg);
            this.webSocket.send(msg);
        } else {
            console.error('WebSocket is not open.');
        }
    }

    public closeWebSocket(): void {
        this.webSocket.close();
    }
}
