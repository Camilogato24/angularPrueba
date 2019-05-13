import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuMainComponent } from './menu-main/menu-main.component';
import { HeroInglesComponent } from './hero-ingles/hero-ingles.component';
import { TabsBootstrapComponent } from './tabs-bootstrap/tabs-bootstrap.component';
import { MarcoComunComponent } from './marco-comun/marco-comun.component';

import { DataService } from './data.service';
import { NivelInglesComponent } from './nivel-ingles/nivel-ingles.component';
import { ApiFormComponent } from './api-form/api-form.component';
import { LogosDivComponent } from './logos-div/logos-div.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuMainComponent,
    HeroInglesComponent,
    TabsBootstrapComponent,
    MarcoComunComponent,
    NivelInglesComponent,
    ApiFormComponent,
    LogosDivComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
