import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-request-bar',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './request-bar.html',
  styleUrls: ['./request-bar.css']
})
export class RequestBarComponent {
  requestMethod: string = 'GET';
  requestUrl: string = '';
  isSending: boolean = false;

  // Lista de métodos com suas cores
  methods = [
    { name: 'GET', color: '#28a745' },
    { name: 'POST', color: '#ffb400' },
    { name: 'PUT', color: '#3399ff' },
    { name: 'PATCH', color: '#cc66ff' },
    { name: 'DELETE', color: '#ff4d4d' },
    { name: 'HEAD', color: '#ffaa00' },
    { name: 'OPTIONS', color: '#ff66cc' }
  ];

  @Output() requestMethodChange = new EventEmitter<string>();
  @Output() requestUrlChange = new EventEmitter<string>();
  @Output() sendRequest = new EventEmitter<{ method: string; url: string }>();

  // Define o método atual e emite o evento
  setMethod(method: string) {
    this.requestMethod = method;
    this.requestMethodChange.emit(method);
  }

  // Clique no botão "Send" ou "Cancel"
  onSendClick() {
    if (this.isSending) {
      this.isSending = false;
    } else {
      this.sendRequest.emit({
        method: this.requestMethod,
        url: this.requestUrl
      });
      this.isSending = true;

      // Simula tempo de requisição (ex: 2s)
      setTimeout(() => (this.isSending = false), 2000);
    }
  }
}
