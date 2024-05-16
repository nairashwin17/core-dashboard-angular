import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { SidemenuComponent } from './components/sidemenu/sidemenu.component';
import { HeaderComponent } from './components/header/header.component';
import { ContentBarComponent } from './components/content-bar/content-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    SidemenuComponent,
    HeaderComponent,
    ContentBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
