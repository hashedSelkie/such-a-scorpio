import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ConstructionComponent } from './construction/construction.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    MenuComponent,
    AboutComponent,
    PortfolioComponent,
    ConstructionComponent,
  
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent, data: { state: 'home' } },
      {path: 'about', component: AboutComponent,  data: { state: 'about' }},
      {path: 'portfolio', component: PortfolioComponent, data: { state: 'portfolio' }}, 
      {path: 'construction', component: ConstructionComponent, data: { state: 'construction' }},     
      {path: '**', redirectTo: '/home', pathMatch: 'full'},
  
    ]),
    HttpClientModule, 
    AngularSvgIconModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
