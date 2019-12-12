import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './common/header/header.component';
import { AutoDocsComponent } from './auto-docs/auto-docs.component';
import { DocsViewComponent } from './auto-docs/docs-view/docs-view.component';
import { DocsFormComponent } from './auto-docs/docs-form/docs-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AutoDocsComponent,
    DocsViewComponent,
    DocsFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
