import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { OAuthModule } from 'angular-oauth2-oidc';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes'; // asegúrate que este archivo exista

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter(routes),
    importProvidersFrom(
      OAuthModule.forRoot({
        resourceServer: {
          allowedUrls: ['https://keycloak-0yrtq1-u44828.vm.elestio.app/realms/api-report'],
          sendAccessToken: true
        }
      })
    )
  ]
});

