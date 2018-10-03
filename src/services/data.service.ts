import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class DataService {
	constructor(private db: AngularFireDatabase) {
	}

	getUserProfiles() {
		return this.db.list('usuario');
	}	
	getChatRooms() {
		return this.db.list('turmas');
	}

	getChatMessages() {
		return this.db.list(`turmas/568b73d9-54b6-f392-bb5f-ddc4e779d1e0/messages`);
	}
}