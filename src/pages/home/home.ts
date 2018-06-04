import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WordManagerProvider } from '../../providers/word-manager/word-manager';

import { Word } from '../../shared/interfaces/word';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  word = new Word();

  constructor(public navCtrl: NavController, public navParams: NavParams, public wordManager: WordManagerProvider) {
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  addWord(form): void {
    this.wordManager.addWord(this.word).then(
      (result) => {
        console.log(result);
      }, (rejection) => {
        console.log(rejection);
      }
    );
  }



}
