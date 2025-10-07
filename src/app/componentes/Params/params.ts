import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-params',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './params.html',
  styleUrls: ['./params.css']
})
export class ParamsComponent {
  params = [{ key: '', value: '', description: '' }];

  addParam() {
    this.params.push({ key: '', value: '', description: '' });
  }

  removeParam(index: number) {
    this.params.splice(index, 1);
  }
}
