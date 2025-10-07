import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorizationComponent } from '../Authorization/authorization';
import { HeadersComponent } from '../Headers/headers';
import { ParamsComponent } from '../Params/params';
import { BodyComponent } from '../Body/body';
import { ScriptsComponent } from '../Scripts/scripts';
import { RequestBarComponent } from '../Request-Bar/request-bar';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [
    CommonModule,
    AuthorizationComponent,
    HeadersComponent,
    ParamsComponent,
    BodyComponent,
    ScriptsComponent,
    RequestBarComponent
  ],
  templateUrl: './tabs.html',
  styleUrls: ['./tabs.css']
})
export class TabsComponent {
  selectedTab: string = 'params'; 

  // dados recebidos da RequestBar
  currentMethod: string = '';
  currentUrl: string = '';

  onRequest(event: { method: string; url: string }) {
    this.currentMethod = event.method;
    this.currentUrl = event.url;

    console.log('🔹 Dados da RequestBar: ', event);
  }
}
