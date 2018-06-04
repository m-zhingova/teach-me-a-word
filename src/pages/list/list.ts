import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WordManagerProvider } from '../../providers/word-manager/word-manager';

import { Word } from '../../shared/interfaces/word';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the ListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})

export class ListPage {
  // words: Word[];
  words: Observable<Word[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public wordManager: WordManagerProvider) {
  }

  ngOnInit(): void {
    this.words = this.wordManager.getAllWords();

    // this.words.subscribe()

    // this.fetchWordsList();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
  }

  // fetchWordsList(): void {
  //   this.wordManager.getAllWords().subscribe(
  //     list => this.words = list,
  //     err => console.error('Error: ' + err),
  //   );
  // }

  removeWordFromList(id: string): void {
    this.wordManager.removeWord(id).then(
      (response) => console.log('ok'),
      (rejection) => console.log('fail')
    )
  }
}
