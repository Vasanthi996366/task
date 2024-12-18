import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { ExpertiseComponent } from './expertise/expertise.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path:'',component:NavbarComponent},
  {path:'expertise-areas',component:ExpertiseComponent},
  {path:'contact',component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
