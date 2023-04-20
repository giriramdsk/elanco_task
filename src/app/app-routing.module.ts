import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ApplicationsComponent } from './components/applications/applications.component';
import { ResourcesComponent } from './components/resources/resources.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'applications', component: ApplicationsComponent },
  { path: 'resources', component: ResourcesComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
