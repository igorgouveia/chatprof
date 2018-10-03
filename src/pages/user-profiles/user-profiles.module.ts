import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { PipesModule } from '../../pipes/pipes.module';
import { UserProfilePage } from './user-profile.page';
import { UserProfilesPage } from './user-profiles.page';
import { CustomComponentsModule } from '../../components/custom-components.module';

@NgModule({
	declarations: [UserProfilesPage, UserProfilePage],
	entryComponents: [UserProfilesPage, UserProfilePage],
	imports: [IonicModule, PipesModule, CustomComponentsModule]
})
export class UserProfilesModules {
}