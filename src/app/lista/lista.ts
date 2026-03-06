import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-lista',
  imports: [CommonModule],
  templateUrl: './lista.html',
  styleUrl: './lista.css',
})
export class Lista {
  lista: string[] = ["Biscoito", "Tomate", "Arroz", "Banana", "Sabão"];
}