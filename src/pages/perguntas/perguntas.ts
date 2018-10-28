import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FirebaseListObservable, AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { DataService } from '../../services/data.service';
import { AuthService } from '../../services/auth.service';
import { FirebaseApp } from 'angularfire2';

/**
 * Generated class for the PerguntasPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-perguntas',
  templateUrl: 'perguntas.html',
})
export class PerguntasPage {
  items$: FirebaseListObservable<any[]>;
  items1$: FirebaseListObservable<any[]>;
  value$: FirebaseObjectObservable<any[]>;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public af: AngularFireDatabase, 
		data: DataService, 
		private nav: NavController, 
		public auth: AuthService,
		private fb: FirebaseApp) {
    this.items$ = data.getPerguntas();
    this.items1$ = data.getAlunos(); 
  } 

  

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerguntasPage');
  }

}
