import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { NavController } from 'ionic-angular';

import { AuthService } from '../../services/auth.service';
import { ChatRoomsPage } from '../chat/chat-rooms.page';

@Component({
	selector: 'as-page-signup',
	templateUrl: './signup.page.html'
})
export class SignupPage {
	signupError: string;
	form: FormGroup;

	constructor(
		fb: FormBuilder,
		private navCtrl: NavController,
		private auth: AuthService
	) {
		this.form = fb.group({
			nome: ['', Validators.compose([Validators.required])],
			matricula: ['', Validators.compose([Validators.required])],
			email: ['', Validators.compose([Validators.required, Validators.email])],
			password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
		});
	}

	signup() {
		let data = this.form.value;
		let credentials = {
			nome: data.nome,
			matricula: data.matricula,
			email: data.email,
			password: data.password
		};
		this.auth.signUp(credentials).then(
			() => this.navCtrl.setRoot(ChatRoomsPage),
			error => this.signupError = error.message
		);
	}
}
