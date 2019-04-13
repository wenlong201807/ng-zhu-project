import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
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

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		NewsComponent,
		ProduceComponent,
		LoginComponent,
		WelcomeComponent,
		SettingsComponent,
		PcateComponent,
		PlistComponent,
		InlandComponent,
		AbroadComponent
	],
	imports: [ BrowserModule, AppRoutingModule ],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
