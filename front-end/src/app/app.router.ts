import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { ContactComponent } from './contact/contact.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from "@angular/core";
import { AuthGuard } from './auth.guard';

export const router: Routes = [
	{path: '', redirectTo: 'home', pathMatch: 'full'},
	{path: 'home', component: HomeComponent},
	{path: 'menu', component: MenuComponent/*, canActivate: [AuthGuard]*/},
	{path: 'contact', component: ContactComponent},
]

export const routes: ModuleWithProviders = RouterModule.forRoot(router);