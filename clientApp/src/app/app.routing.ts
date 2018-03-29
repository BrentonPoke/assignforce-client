import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { OverviewComponent } from './components/overview/overview.component';
import { BatchesComponent } from './components/batches/batches.component';
import { LocationsComponent } from './components/locations/locations.component';
import { CurriculaComponent } from './components/curricula/curricula.component';
import { TrainersComponent } from './components/trainers/trainers.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ReportsComponent } from './components/reports/reports.component';
import { SettingsComponent } from './components/settings/settings.component';
import { LoginComponent } from './components/login/login.component';
import { UrlService } from './services/url/url.service';

let urlService: UrlService = new UrlService();
export const appRoutes: Routes = [
  {
    path: '',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: urlService.getOverviewUrl(),
    component: OverviewComponent
  },
  {
    path: urlService.getBatchesUrl(),
    component: BatchesComponent
  },
  {
    path: urlService.getLocationsUrl(),
    component: LocationsComponent
  },
  {
    path: urlService.getCurriculaUrl(),
    component: CurriculaComponent
  },
  {
    path: urlService.getTrainersUrl(),
    component: TrainersComponent
  },
  {
    path: urlService.getProfileUrl(),
    component: ProfileComponent
  },
  {
    path: urlService.getReportsUrl(),
    component: ReportsComponent
  },
  {
    path: urlService.getSettingsUrl(),
    component: SettingsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRouting {}
