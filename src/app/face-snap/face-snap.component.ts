// Ce composant a pour but de gérer la logique métier de CHAQUE composant snapface INDIVIDUELEMENT

import { Component, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { UpperCasePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [
    UpperCasePipe, // Permet de formater la donnée textuelle dans le DOM (ici : on veut mettre tous les titres en majuscule) ; mais il existe aussi les pipes "LowerCasePipe" ou "TitleCasePipe"
  ],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss',
})
export class FaceSnapComponent { // OnInit est une interface

  @Input() faceSnap!: FaceSnap; // Permet d'injecter des données spécifiques à chaque composant enfant "faceSnapComponent" depuis le composant parent "FaceSnapListComponent"

  // Pour accèder aux méthodes du composant face-snap-service, il faut le récupérer grâce à un constructeur :
  constructor(private router: Router){}

  onViewSnapFace() {
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`)
  }

}
