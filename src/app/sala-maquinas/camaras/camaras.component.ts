// src/app/components/some-component/some-component.component.ts
import { Component, OnDestroy, OnInit } from '@angular/core';
import { WebsocketService } from 'src/app/services/dataService';

@Component({
  selector: 'app-camaras-component',
  templateUrl: './camaras.component.html',
  styleUrls: ['./camaras.component.css'],
})

export class CamarasComponent implements OnInit, OnDestroy {

  constructor(private websocketService: WebsocketService) { }

  ngOnInit(): void {
    this.websocketService.openWebSocket(JSON.stringify({ action: 'master', data: '...' }));

    this.websocketService.onMessage().subscribe(data => {
      console.log('Datos recibidos del servidor:', data);
      // Aquí manejas los datos recibidos, actualizando la vista o el estado según sea necesario
    });
  }

  ngOnDestroy(): void {
    this.websocketService.closeWebSocket();
  }

}
