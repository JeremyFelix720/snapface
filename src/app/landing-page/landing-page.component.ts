import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    RouterLink,
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

  // On injecte une dépendance (service ou fichier spécifique) en passant par le constructeur
  constructor(private router: Router){}

  // Changement de route de façon programatique (avec l'appel d'une méthode)
  onContinue(): void {
    this.router.navigateByUrl("facesnaps");
  }

}
