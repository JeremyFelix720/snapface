// La configuration des routes se passe ici

import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { TestsComponent } from './tests/tests.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, // C'est le composant qui gère l'affichage d'un composant associé à la route active (quand il y a un matching entre une des routes renseignées dans le "app.routes" et la valeur de l'URL actuelle)
    HeaderComponent,
    TestsComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
