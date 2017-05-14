import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { Router } from '@angular/router';

import { MainNavigationMenuModule } from './components/home_navigation/main-navigation-menu.module';
import { DashboardModule } from './components/dashboard/dashboard.module';
import { AboutModule } from './components/about/about.module';
import { ContactModule } from './components/contact/contact.module';
import { AppComponent } from './app.component';
import { AppRoutingModule, mainRoutingProviders } from './app-routing.module';
import { RouteOutletComponent } from './route-outlet.component';
import { PageNotFoundComponent } from './page-not-found.component';


@NgModule({
  imports:      [ BrowserModule, CommonModule, FormsModule, HttpModule, DashboardModule, MainNavigationMenuModule, AboutModule, ContactModule, AppRoutingModule, mainRoutingProviders ],
  declarations: [ AppComponent, RouteOutletComponent, PageNotFoundComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule {
  constructor(router: Router){
    console.log('Routes: ',JSON.stringify(router.config, undefined, 2));
  }
}
