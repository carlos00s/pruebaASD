import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FormComponent } from './components/form/form.component';
import { ListComponent } from './components/list/list.component';

import { PersonajesService } from './services/personajes.service'

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FormComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    PersonajesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
