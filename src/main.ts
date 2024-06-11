import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { registerLocaleData } from '@angular/common';
import * as fr from '@angular/common/locales/fr';

registerLocaleData(fr.default); // Change la langue de l'application en Français (ex. : pour les affichages pré-configurés des dates, etc.)

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));