import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';
import { authConfig } from '../../auth.config';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent {
  constructor(private oauthService: OAuthService) {
    this.oauthService.configure(authConfig);
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
    this.configureOAuth();
  }

  configureOAuth(): void {
    this.oauthService.configure(authConfig);
    this.oauthService.loadDiscoveryDocumentAndTryLogin().then(() => {
    const idToken = this.oauthService.getIdToken();     
    });
  }

  logout(): void {
    const idToken = this.oauthService.getIdToken();
    const logoutUrl =
      this.oauthService.logoutUrl +
      '?id_token_hint=' +
      encodeURIComponent(idToken) +
      '&post_logout_redirect_uri=' +
      encodeURIComponent(window.location.origin);
    const logoutUrl1 =
      this.oauthService.issuer + '/protocol/openid-connect/logout';
      console.log(logoutUrl1);
      window.location.href = logoutUrl;
  }
}
