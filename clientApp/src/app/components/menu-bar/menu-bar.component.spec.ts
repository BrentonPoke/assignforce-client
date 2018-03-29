import { async, ComponentFixture, fakeAsync, getTestBed, TestBed, tick } from '@angular/core/testing';

import { MenuBarComponent } from './menu-bar.component';
import { AppMaterialModule } from '../../app-material/app-material.module';
import { ActivatedRoute, Data, Params, Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { appRoutes } from '../../app.routing';
import { Location } from '@angular/common';
import { LoginComponent } from '../login/login.component';
import { OverviewComponent } from '../overview/overview.component';
import { BatchesComponent } from '../batches/batches.component';
import { CurriculaComponent } from '../curricula/curricula.component';
import { ProfileComponent } from '../profile/profile.component';
import { ReportsComponent } from '../reports/reports.component';
import { SettingsComponent } from '../settings/settings.component';
import { LocationsComponent } from '../locations/locations.component';
import { TrainersComponent } from '../trainers/trainers.component';

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
  let location: Location;

  class MockRouter {
    navigate = jasmine.createSpy('navigate');
  }

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [AppMaterialModule, RouterTestingModule.withRoutes(appRoutes), BrowserAnimationsModule],
        declarations: [
          MenuBarComponent,
          LoginComponent,
          OverviewComponent,
          BatchesComponent,
          CurriculaComponent,
          ProfileComponent,
          ReportsComponent,
          SettingsComponent,
          LocationsComponent,
          TrainersComponent
        ],
        providers: [{ provide: ActivatedRoute, useValue: activeRoute }]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuBarComponent);
    component = fixture.componentInstance;
    router = TestBed.get(Router);
    location = TestBed.get(Location);
    fixture.detectChanges();
    router.initialNavigation();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should navigate to overview', () => {
    const injector = getTestBed();
    router = injector.get(Router);
    router.navigate(['overview']);
    const fixture = TestBed.createComponent(OverviewComponent);
    fixture.detectChanges();
    router.navigate(['overview']).then(() => {
      expect(router.url).toEqual('overview');
    });
  });
  it('should navigate to profile', () => {
    router.navigate(['profile']);
    tick();
    expect(location.path()).toBe('profile');
  });
});
