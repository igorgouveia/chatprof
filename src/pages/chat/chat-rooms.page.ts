import { Component } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';

import { NavController } from 'ionic-angular';
import { DataService } from '../../services/data.service';
import { ChatMessagesPage } from './chat-messages.page';

@Component({
	selector: 'as-page-chat-rooms',
	templateUrl: './chat-rooms.page.html'
})
export class ChatRoomsPage {
	items$: FirebaseListObservable<any[]>;

	constructor(data: DataService, private nav: NavController) {
		this.items$ = data.getChatRooms();
	}

	public itemTapped(item) {
		this.nav.push(ChatMessagesPage, {
			item: item
		});
	}
}
