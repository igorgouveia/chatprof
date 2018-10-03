import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { StatusBar } from '@ionic-native/status-bar';
import { NgxErrorsModule } from '@ultimate/ngxerrors';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireDatabaseModule } from 'angularfire2/database';
import { IonicApp, IonicModule } from 'ionic-angular';
import { CustomComponentsModule } from '../components/custom-components.module';
import { config } from '../config';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { LoginPage } from '../pages/login/login.page';
import { SignupPage } from '../pages/signup/signup.page';
import { UserProfilesModules } from '../pages/user-profiles/user-profiles.module';
import { AuthService } from '../services/auth.service';
import { DataService } from '../services/data.service';
import { MyApp } from './app.component';
import { ChatModule } from '../pages/chat/chat.module';
import { ResetPasswordPage } from '../pages/reset-password/reset-password.page';
import { ImagePicker } from '@ionic-native/image-picker';
import { Base64 } from '@ionic-native/base64';

@NgModule({
	declarations: [
		MyApp,
		LoginPage,
		SignupPage,
		ResetPasswordPage,	
		],
	imports: [
		BrowserModule,
		HttpModule,
		IonicModule.forRoot(MyApp),
		AngularFireModule.initializeApp(config.fire),
		NgxErrorsModule,
		CustomComponentsModule,
		UserProfilesModules,
		ChatModule,
	],
	bootstrap: [IonicApp],
	entryComponents: [
		MyApp,
		LoginPage,
		SignupPage,
		ResetPasswordPage,
		
	],
	providers: [
		StatusBar,
		AuthService,
		AngularFireAuth,
		AngularFireDatabase,
		DataService,
		ImagePicker,
		  Base64, 
		  
	]
})
export class AppModule {
}
