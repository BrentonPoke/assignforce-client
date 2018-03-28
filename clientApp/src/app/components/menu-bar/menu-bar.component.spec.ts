import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { MenuBarComponent } from './menu-bar.component';
import { AppMaterialModule } from '../../app-material/app-material.module';
import { ActivatedRoute, Data, Params, Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export class MockActivatedRoute {
  private paramsSubject = new BehaviorSubject(this.testParams);
  private _testParams: {};

  params = this.paramsSubject.asObservable();

  get testParams() {
    return this._testParams;
  }
  set testParams(newParams: any) {
    this._testParams = newParams;
    this.paramsSubject.next(newParams);
  }
}

describe('MenuBarComponent', () => {
  let activeRoute: MockActivatedRoute;
  let router: Router;
  let component: MenuBarComponent;
  let fixture: ComponentFixture<MenuBarComponent>;

  let routes = [
    'overview',
    'batches',
    'locations',
    'curricula',
    'trainers',
    'profile',
    'reports',
    'settings',
    'logout'
  ];

  class MockRouter {
    navigate = jasmine.createSpy('navigate');
  }

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [AppMaterialModule, RouterTestingModule.withRoutes(this.routes), BrowserAnimationsModule],
        declarations: [MenuBarComponent],
        providers: [{ provide: ActivatedRoute, useValue: activeRoute }]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router.initialNavigation();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should navigate to overview', () => {
    router.navigate(['overview']);
    tick();
    expect(location.pathname).toBe('/overview');
  });
  it('should navigate to profile', () => {
    router.navigate(['profile']);
    tick();
    expect(location.pathname).toBe('/profile');
  });
});
