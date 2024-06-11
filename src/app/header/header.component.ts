import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink, // Permet de naviguer d'une URL à une autre lorsque l'on clique sur l'élément avec l'attribut rempli
    RouterLinkActive // Permet d'appliquer une classe spécifique pour l'élément cliqué si l'attribut routerLInk correspond au composant actif 
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
}
