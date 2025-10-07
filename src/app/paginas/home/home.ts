import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { AuthorizationComponent } from '../../componentes/Authorization/authorization';
import { HeadersComponent } from '../../componentes/Headers/headers';
import { BodyComponent } from '../../componentes/Body/body';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatTabsModule,
    AuthorizationComponent,
    HeadersComponent,
    BodyComponent
  ],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent {}