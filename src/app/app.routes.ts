import { Routes } from '@angular/router';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { TestsComponent } from './tests/tests.component';
import { SingleFaceSnapComponent } from './single-face-snap/single-face-snap.component';


export const routes: Routes = [
    {
        path: '',
        component: LandingPageComponent
    },
    {
        path: 'facesnaps', // nom de la route (à rajouter à la fin de l'URL pour que le composant ci-dessous devienne "actif" et s'affiche)
        component: FaceSnapListComponent // composant associé
    },
    {
        path: 'facesnaps/:id',
        component: SingleFaceSnapComponent
    },
    {
        path: 'tests',
        component: TestsComponent
    }
  ];