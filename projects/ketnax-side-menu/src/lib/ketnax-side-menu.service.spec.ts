import { TestBed } from '@angular/core/testing';

import { KetnaxSideMenuService } from './ketnax-side-menu.service';

describe('KetnaxSideMenuService', () => {
  let service: KetnaxSideMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KetnaxSideMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
