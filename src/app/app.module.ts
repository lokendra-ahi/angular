import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestingComponent } from './testing/testing.component';
import { TestingComponentComponent } from './testing-component/testing-component.component';
import { CompaniesComponent } from './companies/companies.component';
import { ProfileComponent } from './profile/profile.component';
import { ComparisonComponent } from './comparison/comparison.component';

@NgModule({
  declarations: [
    AppComponent,
    TestingComponent,
    TestingComponentComponent,
    CompaniesComponent,
    ProfileComponent,
    ComparisonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
