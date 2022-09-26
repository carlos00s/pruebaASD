import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListComponent } from './components/list/list.component';
import { FormComponent } from './components/form/form.component';

const routes: Routes = [
  {path: '', redirectTo: '/personajes', pathMatch: 'full'},
  {path: 'personajes', component: ListComponent},
  {path: 'personajes/agregar', component: FormComponent},
  {path: 'personajes/editar/:id', component: FormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
