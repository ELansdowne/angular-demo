import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DirectiveDemoComponent } from './directive-demo/directive-demo.component';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { TemplateformDemoComponent } from './templateform-demo/templateform-demo.component';

const routes: Routes = [
  { path: 'directive', component: DirectiveDemoComponent },
  { path: 'pipe', component: PipeDemoComponent },
  { path: 'template', component: TemplateformDemoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
