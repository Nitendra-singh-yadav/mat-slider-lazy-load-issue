import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
const routes: Routes = [
  {path: 'lazy', loadChildren: './lazy/lazy.module#LazyModule'}
]
@NgModule({
  imports:      [ 
    BrowserModule,
     FormsModule,
     RouterModule.forRoot(routes),
      ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
