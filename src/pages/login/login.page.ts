import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { NavController } from 'ionic-angular';
import { AuthService } from '../../services/auth.service';
import { SignupPage } from '../signup/signup.page';
import { ResetPasswordPage } from '../reset-password/reset-password.page';
import { HomePage } from '../home/home';


@Component({
	selector: 'as-page-login',
	templateUrl: './login.page.html'
})
export class LoginPage {
	form: FormGroup;
	loginError: string;

	constructor(
		private navCtrl: NavController,
		private auth: AuthService,
		fb: FormBuilder
	) {
		this.form = fb.group({
			email: ['', Validators.compose([Validators.required, Validators.email])],
			password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
		});
	}

	login() {
		let data = this.form.value;

		if (!data.email) {
			return;
		}

		let credentials = {
			email: data.email,
			password: data.password
		};
		this.auth.signInWithEmail(credentials)
			.then(
				() => this.navCtrl.setRoot(HomePage),
				error => this.loginError = error.message
			);
	}

	signup() {
		this.navCtrl.push(SignupPage);
	}

	resetPassword() {
		this.navCtrl.push(ResetPasswordPage);
	}
}
