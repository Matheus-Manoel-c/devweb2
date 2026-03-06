import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Perfil } from './perfil/perfil';
import { Incrementar } from './incrementar/incrementar';
import { Nometela } from './nometela/nometela';
import { Lista } from './lista/lista';
import { Lista2 } from './lista2/lista2';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Perfil, Incrementar,Nometela, Lista, Lista2],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('teste');
}
