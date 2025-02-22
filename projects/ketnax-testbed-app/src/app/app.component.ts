import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { KetnaxSideMenuComponent, TitleColor } from 'ketnax-side-menu';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, KetnaxSideMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ketnax-testbed-app';

  isAuthenticated = signal(false);
  public TitleColor = TitleColor;
}
