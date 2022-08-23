import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpenseGuard } from './components/expense.guard';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { MovieComponent } from './components/movie/movie.component';
import { PageNotFoundScreenComponent } from './components/notfound/page-not-found-screen.component';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'logout', component: LogoutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [ExpenseGuard] },
  { path: 'home/:id', component: MovieComponent, canActivate: [ExpenseGuard] },
  { path: 'error', component: PageNotFoundScreenComponent },
  { path: '**', redirectTo: '/error' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
