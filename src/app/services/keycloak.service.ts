/*import { Injectable } from '@angular/core';
import Keycloak from 'keycloak-js';

@Injectable({
  providedIn: 'root'
})
export class KeycloakService {
  private keycloak: Keycloak;

  constructor() {
    this.keycloak = new Keycloak({
      url: 'https://keycloak-0yrtq1-u44828.vm.elestio.app',  // URL de tu servidor Keycloak
      realm: 'api-report',              // Nombre del Realm
      clientId: 'angular-report'  // ID del cliente configurado
    });
  }

  async init(): Promise<void> {
    try {
      await this.keycloak.init({
        onLoad: 'login-required', // o 'check-sso'
        flow: 'standard',
      });
    } catch (error) {
      console.error('Error inicializando Keycloak', error);
    }
  }

  isLoggedIn(): boolean {
    return !!this.keycloak.token;
  }

  login(): void {
    this.keycloak.login();
  }

  logout(): void {
    this.keycloak.logout();
  }

  getToken(): string | undefined {
    return this.keycloak.token;
  }

  getUsername(): string | undefined {
    return this.keycloak.tokenParsed?.['preferred_username'];
  }
}*/