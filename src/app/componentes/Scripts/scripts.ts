import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-scripts',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './scripts.html',
  styleUrls: ['./scripts.css']
})
export class ScriptsComponent {
  preRequestScript: string = '';
  testScript: string = '';

  executarScripts() {
    console.log('Pré-requisição:', this.preRequestScript);
    console.log('Teste:', this.testScript);
  }
}
