import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LazyComponent } from './lazy-component/lazy.component.ts'
const routes: Routes = [
  {path: '', component: LazyComponent}
]
@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  declarations: [LazyComponent]
})
export class LazyModule { }