import { Component } from '@angular/core';

import { NavParams } from 'ionic-angular';
import { CallService } from '../../services/call.service';
import { EmailService } from '../../services/email.service';
import { InAppBrowserService } from '../../services/in-app-browser.service';

@Component({
	templateUrl: './user-profile.page.html',
	selector: 'as-page-user-profile'
})
export class UserProfilePage {
	item: any;

	constructor(
		navParams: NavParams,
		private emailService: EmailService,
		private callService: CallService,
		private browserService: InAppBrowserService
	) {
		this.item = navParams.get('item');
	}

	public sendEmail() {
		let email = {
			to: this.item.email,
			subject: 'Meeting request',
			body: 'I would like to arrange a meeting with you.'
		};

		this.emailService.sendEmail(email);
	}

	public openPage() {
		this.browserService.open(this.item.webpage);
	}

	public openLinkedIn() {
		this.browserService.open(this.item.linkedIn);
	}

	public call() {
		this.callService.call(this.item.phoneNumber);
	}
}
