import { Component } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';

import { NavController } from 'ionic-angular';
import { DataService } from '../../services/data.service';
import { UserProfilePage } from './user-profile.page';

@Component({
	templateUrl: './user-profiles.page.html',
	selector: 'as-page-user-profiles'
})
export class UserProfilesPage {
	items$: FirebaseListObservable<any[]>;

	constructor(data: DataService, private nav: NavController) {
		this.items$ = data.getUserProfiles();
	}

	public itemTapped(item) {
		this.nav.push(UserProfilePage, {
			item: item
		});
	}
}
