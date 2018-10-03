import { Component, Input } from '@angular/core';

@Component({
	selector: 'as-avatar',
	templateUrl: './avatar.component.html'
})
export class AvatarComponent {
	@Input() user: {
		firstName: string,
		lastName: string;
		avatar: { url: string; }[];
	};
	@Input() size: 'big' | 'small' = 'small';

	get hasImage(): boolean {
		return this.user.avatar && this.user.avatar[0] && !!this.user.avatar[0].url;
	}

	get initials(): string {
		return (this.user.firstName[0] + this.user.lastName[0]).toUpperCase();
	}
}
