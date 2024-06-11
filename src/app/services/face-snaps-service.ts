// Les services permettent de centraliser les données et la logique (interactions) pour les différents domaines de votre application.

// Ce composant a pour but de gérer L'ENSEMBLE des composants snapface

import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap";
import { SnapType } from "../models/snap-type.type";

// Le décorateur "@Injectable()" transforme une classe en service.
@Injectable({
    providedIn: 'root' // Pour enregistrer le service à la racine de l'application
})

export class FaceSnapService {
    private _faceSnaps: FaceSnap[] = [
        new FaceSnap(
            "Bouquet de roses",
            new Date(),
            "https://medias.florajet.com/_w_/produits/600/89328.jpg",
            "Il y a 3 variétés : rose, rouge et jaune.",
            15
        ),
        new FaceSnap(
            "Bouquet de lys",
            new Date(),
            "https://www.plusdefleurs.com/wp-content/uploads/2022/03/Lys-rose-tiges-de-fleurs.jpg",
            "Il n'y a que des variétés roses.",
            80
        ).withLocation("dans mon salon d'été"),
        new FaceSnap(
            "Bouquet de marguerites",
            new Date(),
            "https://media.vitrinemagique.com/pdmain/40108-H-01-3P_HAUPTBILD_WS_3P_FR.jpg",
            "Il n'y a que des variétés blanches.",
            140
        )
    ];

    public getFaceSnaps(): FaceSnap[] {
        return [...this._faceSnaps]; // création d'une copie du tableau "faceSnaps" pour ne pas modifier le tableau original
    }
    public setFaceSnaps(value: FaceSnap[]) {
        this._faceSnaps = value;
    }


    getFaceSnapById(faceSnapId: string):FaceSnap {

        const snapFaceFounded: FaceSnap | undefined = this._faceSnaps.find((faceSnap: FaceSnap) => faceSnap.id === faceSnapId);

        if(!snapFaceFounded) {
            throw new Error("Face snap not found !");
        }

        return snapFaceFounded;
    }

    snapOrUnsnapFaceSnapById(faceSnapId: string, faceSnapType: SnapType): void {

        const snapFaceFounded: FaceSnap | undefined = this._faceSnaps.find((faceSnap: FaceSnap) => faceSnap.id === faceSnapId);

        if(snapFaceFounded){
            snapFaceFounded.snapOrUnsnap(faceSnapType);
        } else {
            throw new Error("Face snap not found !");
        }

        // console.log("LA FACE SNAP CORRESPONDANTE A CET ID EST :")
        // console.log(snapFaceFounded);
    }
}