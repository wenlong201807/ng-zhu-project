import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { NewsComponent } from './components/news/news.component';
import { ProduceComponent } from './components/produce/produce.component';
import { LoginComponent } from './components/login/login.component';
import { WelcomeComponent } from './components/home/welcome/welcome.component';
import { SettingsComponent } from './components/home/settings/settings.component';
import { PcateComponent } from './components/produce/pcate/pcate.component';
import { PlistComponent } from './components/produce/plist/plist.component';
import { InlandComponent } from './components/news/inland/inland.component';
import { AbroadComponent } from './components/news/abroad/abroad.component';
const routers = [
	{ path: 'login', component: LoginComponent, children: [] },
	{
		path: 'Home',
		component: HomeComponent,
		children: [
			{
				path: 'News',
				component: NewsComponent,
				children: [
					{ path: 'Inland', component: InlandComponent, children: [] },
					{ path: 'Abroad', component: AbroadComponent, children: [] },
					{ path: '**', redirectTo: 'Abroad', pathMatch: 'full' }
				]
			},
			{
				path: 'Produce',
				component: ProduceComponent,
				children: [
					{ path: 'Pcate', component: PcateComponent, children: [] },
					{ path: 'Plist', component: PlistComponent, children: [] },
					{ path: '**', redirectTo: 'Pcate', pathMatch: 'full' }
				]
			},
			{ path: 'Welcome', component: WelcomeComponent, children: [] },
			{ path: 'Settings', component: SettingsComponent, children: [] },
			{ path: '**', redirectTo: 'Welcome', pathMatch: 'full' }
		]
	},
	{ path: '**', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
	declarations: [],
	imports: [ CommonModule, RouterModule.forRoot(routers) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
