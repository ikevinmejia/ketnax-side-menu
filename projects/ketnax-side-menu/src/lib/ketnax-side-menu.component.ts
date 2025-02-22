import { Component, input, output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

export enum TitleColor {
  red = 'text-red-500',
  green = 'text-green-500',
  blue = 'text-blue-500',
  purple = 'text-purple-500',
}

@Component({
  selector: 'lib-ketnax-side-menu',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './ketnax-side-menu.component.html',
})
export class KetnaxSideMenuComponent {
  public isAuthenticated = input(false);
  public title= input('Ketnax');
  public subTitle = input('Corp');

  public titleColor = input<TitleColor>(TitleColor.purple)

  onSignOut = output();
  onSignIn = output();
}
