import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectiveDemoComponent } from './directive-demo/directive-demo.component';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { HighlightDirective } from './shared/highlight.directive';
import { ShortPipe } from './shared/short.pipe';
import { TemplateformDemoComponent } from './templateform-demo/templateform-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    DirectiveDemoComponent,
    PipeDemoComponent,
    HighlightDirective,
    ShortPipe,
    TemplateformDemoComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
