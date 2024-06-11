import { SnapType } from "./snap-type.type";

export class FaceSnap {

    id!: string; // Dans une application classique (front + back + BDD), chaque entité snapface est automatiquement associé à un id spécifique mais ici (front seul), il faut l'implémenter manuelement

    location?: string; // proriété optionnelle (on ne sera pas obligé de la spécifier lors de la création d'une instance du composant "FaceSnap")

    // Les propriétés du composant (celles qui ne sont pas liées à la logique des méthodes) sont définies ici :
    constructor(
       public title: string,
       public createdAt: Date,
       public imageUrl: string,
       public description: string,
       public snaps: number
    ) {
        this.id = crypto.randomUUID().substring(0, 8); // la méthode randomUUID() permet de générer une chaine de carractères complexe et unique ; la méthode substring() permet de gérer le nombre de carractères composants l'id
        console.log(this);
    }

    snapOrUnsnap(faceSnapType: SnapType){

        if(faceSnapType === "snap"){
            this.addSnap();
        } else if(faceSnapType === "unsnap"){
            this.removeSnap();
        }
      }

    addSnap():void {
        this.snaps++;
    }

    removeSnap():void {
        this.snaps--;
    }

    setLocation(location: string) {
        this.location = location;
    }

    withLocation(location:string): FaceSnap{
        this.setLocation(location);
        return this;
    } // permet d'ajouter cette information direction lors de l'instatiation de l'objet dans le service dédié "face-snaps-service"
}