import { ComponentFixture, TestBed } from '@angular/core/testing';

import { provideRouter } from '@angular/router';
import { KetnaxSideMenuComponent } from './ketnax-side-menu.component';

describe('KetnaxSideMenuComponent', () => {
  let component: KetnaxSideMenuComponent;
  let fixture: ComponentFixture<KetnaxSideMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KetnaxSideMenuComponent, ],
      providers: [provideRouter([])],
    })
    .compileComponents();

    fixture = TestBed.createComponent(KetnaxSideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call onSignIn when button is clicked', () => {
    spyOn(component.onSignIn, 'emit');

    fixture.componentRef.setInput('isAuthenticated', false);
    fixture.detectChanges();

    const button = fixture.nativeElement.querySelector('[data-login]') as HTMLButtonElement;
    expect(button).toBeTruthy();
    button.click();

    expect(component.onSignIn.emit).toHaveBeenCalled();
  });

  it('should call onSiOut when button is clicked', () => {
    spyOn(component.onSignOut, 'emit');

    fixture.componentRef.setInput('isAuthenticated', true);
    fixture.detectChanges();

    const button = fixture.nativeElement.querySelector('[data-logout]') as HTMLButtonElement;
    expect(button).toBeTruthy();
    button.click();

    expect(component.onSignOut.emit).toHaveBeenCalled();
  });
});
