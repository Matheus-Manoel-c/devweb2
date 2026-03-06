import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nometela',
  imports: [FormsModule],
  templateUrl: './nometela.html',
  styleUrl: './nometela.css',
})
export class Nometela {
  nome: string = "";
  url: string = "";
}
