import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestingComponent } from './testing/testing.component';
import { TestingComponentComponent } from './testing-component/testing-component.component';
import { ProfileComponent } from './profile/profile.component';
import { ComparisonComponent } from './comparison/comparison.component';
import { CompaniesComponent } from './companies/companies.component';


const routes: Routes = [
  { path: 'testing', component: TestingComponent},
  { path:'testing-component',component:TestingComponentComponent},
  {path:'profile',component:ProfileComponent},
  {path:'comparison',component:ComparisonComponent},
  {path:'companies',component:CompaniesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const  routingComponents =[TestingComponent,TestingComponentComponent,ProfileComponent,ComparisonComponent,CompaniesComponent];
