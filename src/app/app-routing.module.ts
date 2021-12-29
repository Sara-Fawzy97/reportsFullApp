import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewsComponent } from './views/add-news/add-news.component';
import { LoginComponent } from './views/login/login.component';
import { ProfileComponent } from './views/profile/profile.component';
import { SignUpComponent } from './views/sign-up/sign-up.component';
import { UpdateComponent } from './views/update/update.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'signup', component:SignUpComponent},
  { path: 'profile', component:ProfileComponent},
  { path: 'update/:id', component:UpdateComponent},
  { path: 'addnew', component:AddNewsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
