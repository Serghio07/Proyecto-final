import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { ContactoComponent } from '../src/app/pages/contacto/contacto.component';


bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(appRoutes), // Provee el sistema de ruteo
  ],
}).catch((err) => console.error(err));

bootstrapApplication(ContactoComponent, {
  providers: [provideHttpClient()],
});