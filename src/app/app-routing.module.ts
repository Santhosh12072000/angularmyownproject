import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SummaComponent } from './summa/summa.component';

const routes: Routes = [
  {
    path:"menu",component:SummaComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
