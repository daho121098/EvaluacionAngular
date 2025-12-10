import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-boton',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.css']
})
export class BotonComponent {
  @Input() label: string = '';
  @Input() color: string = '';
}
