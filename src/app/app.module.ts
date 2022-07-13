import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { MarksComponent } from './marks/marks.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    MarksComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { 
  
}
