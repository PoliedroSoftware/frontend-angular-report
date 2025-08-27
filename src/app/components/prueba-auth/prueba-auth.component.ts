import { Component, OnInit } from '@angular/core'
//import { Component } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { authConfig } from '../../auth.config';




@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './prueba-auth.component.html',
  styleUrl: './prueba-auth.component.css'
    
})
export class PruebaAuthComponent implements OnInit {


  
  constructor(private oauthService: OAuthService) {
    this.oauthService.configure(authConfig);
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }
   

  ngOnInit(): void {
    
    this.login();
   

  }

login() {
    this.oauthService.initLoginFlow();
  }

  logout() {
 
    this.oauthService.logOut(); 

  }
}



