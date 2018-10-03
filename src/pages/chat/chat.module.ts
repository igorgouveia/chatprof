import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { PipesModule } from '../../pipes/pipes.module';
import { ChatRoomsPage } from './chat-rooms.page';
import { ChatMessagesPage } from './chat-messages.page';
import { Ng2OrderModule } from 'ng2-order-pipe';

@NgModule({
	declarations: [ChatRoomsPage, ChatMessagesPage],
	entryComponents: [ChatRoomsPage, ChatMessagesPage],
	imports: [IonicModule, PipesModule, Ng2OrderModule]
})
export class ChatModule {
}