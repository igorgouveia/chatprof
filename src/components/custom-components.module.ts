import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { TilesComponent } from './tiles/tiles.component';
import { PipesModule } from '../pipes/pipes.module';
import { AvatarComponent } from './avatar/avatar.component';

@NgModule({
	imports: [IonicModule, PipesModule],
	declarations: [TilesComponent, AvatarComponent],
	exports: [TilesComponent, AvatarComponent]
})
export class CustomComponentsModule {
}