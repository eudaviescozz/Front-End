import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './componentes/Tabs/tabs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, TabsComponent],
  template: `<app-tabs></app-tabs>`,
  styleUrls: ['./app.css']
})
export class AppComponent {}
