// src/app/auth.config.ts
import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {
  issuer: 'https://keycloak-0yrtq1-u44828.vm.elestio.app/realms/api-report',
  redirectUri: window.location.origin+'/inventory',
  postLogoutRedirectUri: window.location.origin,
  clientId: 'angular-report',
  responseType: 'code',
  scope: 'openid profile email',
  showDebugInformation: true,
  requireHttps: true,
  disableAtHashCheck: true,
};

