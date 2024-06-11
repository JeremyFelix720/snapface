// Ce composant a pour but de gérer la logique métier de CHAQUE composant snapface INDIVIDUELEMENT

import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { DatePipe, LowerCasePipe, NgClass, NgStyle, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { FaceSnapService } from '../services/face-snaps-service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-single-face-snap',
  standalone: true,
  imports: [
    NgStyle, // Attention : dans l'import, c'est avec un "N" majuscule mais c'est avec un "n" minuscule dans l'attribut du DOM
    NgClass,
    UpperCasePipe, // Permet de formater la donnée textuelle dans le DOM (ici : on veut mettre tous les titres en majuscule) ; mais il existe aussi les pipes "LowerCasePipe" ou "TitleCasePipe",
    LowerCasePipe, // pour afficher le texte en minuscule
    TitleCasePipe, // pour afficher la première lettre de chaque mot en majuscule
    DatePipe, // pour formater les dates
    RouterLink
  ],
  templateUrl: './single-face-snap.component.html',
  styleUrl: './single-face-snap.component.scss',
})
export class SingleFaceSnapComponent implements OnInit { // OnInit est une interface

  faceSnap!: FaceSnap; // Permet d'injecter des données spécifiques à chaque composant enfant "faceSnapComponent" depuis le composant parent "appComponent"


  // Pour accèder aux méthodes du composant face-snap-service, il faut le récupérer grâce à un constructeur :
  constructor(
    private faceSnapService: FaceSnapService,
    private route: ActivatedRoute
  ){}


  // Propriétés liées à la logique des méthodes :
  snapButtonContent!: string;
  userHasSnaped!: boolean;

  // la méthode ngOnInit (propriété du composant) se declenche après le constructeur et permet d'assigner de vraies valeurs aux propriétés du composants
  ngOnInit(): void {
    this.prepareInterface();
    this.getSnapFace();
  }

  onSnap():void {
    if(this.userHasSnaped === false) {
      this.snap();
    } else {
      this.unsnap();
    }
  }
  
  snap():void {
    // this.faceSnap.addSnap();
    this.faceSnapService.snapOrUnsnapFaceSnapById(this.faceSnap.id, "snap")
    this.userHasSnaped = true;
    this.snapButtonContent = "Unsnap";
  }
  
  unsnap():void {
    // this.faceSnap.removeSnap();
    this.faceSnapService.snapOrUnsnapFaceSnapById(this.faceSnap.id, "unsnap")
    this.userHasSnaped = false;
    this.snapButtonContent = "Snap";
  }
  
  // La méthode "getSnapFace" est privée car elle n'a pas besoin d'être appelée par le template
  private getSnapFace(){
    const faceSnapId = this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapService.getFaceSnapById(faceSnapId);
  }

  private prepareInterface(){
    // Les propriétés par defaut de la classe sont implémentées ici : 
    this.userHasSnaped = false;
    this.snapButtonContent = "Snap"
  }
}
