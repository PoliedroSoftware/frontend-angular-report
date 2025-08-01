import { Component } from '@angular/core';
import { NavComponent } from '@components/nav/nav.component';

@Component({
  selector: 'app-root',
  imports: [ NavComponent],
  templateUrl: './app.component.html', 
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'client';


 
}

