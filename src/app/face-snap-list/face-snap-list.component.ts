import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { FaceSnapComponent } from '../face-snap/face-snap.component';
import { FaceSnapService } from '../services/face-snaps-service';

@Component({
  selector: 'app-face-snap-list',
  standalone: true,
  imports: [FaceSnapComponent],
  templateUrl: './face-snap-list.component.html',
  styleUrl: './face-snap-list.component.scss'
})
export class FaceSnapListComponent implements OnInit {
  faceSnapArray!: FaceSnap[];

  // Pour injecter un service dans un component, on passe un argument du type du service au constructor avec un modificateur d'accès
  constructor(private faceSnapService: FaceSnapService){
  }

  ngOnInit(): void {

    this.faceSnapArray = this.faceSnapService.getFaceSnaps(); // On utilise la méthode getteur de la classe "faceSnapService" pour aller récupérer le tableau des faceSnaps avec les vraies données et de les afficher ensuite dans le DOM du composant "faceSnapList"
  }
}
