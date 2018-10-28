import { Component } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';

import { NavParams } from 'ionic-angular';
import { DataService } from '../../services/data.service';
import { AuthService } from '../../services/auth.service';

@Component({
	selector: 'as-page-chat-messages',
	templateUrl: './chat-messages.page.html'
})
export class ChatMessagesPage {
	item: any;
	messages$: FirebaseListObservable<any[]>;
	items1$: FirebaseListObservable<any[]>;
	public usuario: any = this.auth.getid();

	constructor(navParams: NavParams, data: DataService, public auth: AuthService) {

		this.messages$ = data.getChatMessages();
		this.items1$ = data.getAlunos();
	}

	send(message: string) {
		this.messages$.push({
			createdAt: new Date().toLocaleString(),
			from: this.auth.getid(),
			text: message
		});
	}

}
