import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient, withInterceptors  } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { OAuthModule } from 'angular-oauth2-oidc';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes'; // asegúrate que este archivo exista
import { loadingInterceptor } from 'app/loading.interceptor';


bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(withInterceptors([loadingInterceptor])),
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

//'''''''''''''?????'''''''???????''''''''????????






