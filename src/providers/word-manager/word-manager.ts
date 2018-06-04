import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection  } from 'angularfire2/firestore';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Word } from '../../shared/interfaces/word';

/*
  Generated class for the WordManagerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WordManagerProvider {
  private wordsCollection: AngularFirestoreCollection<Word>;
  private wordDoc: AngularFirestoreDocument<Word>;
  words: Observable<Word[]>;
  constructor(public http: HttpClient, public db: AngularFirestore) {
    this.wordsCollection = this.db.collection<Word>('words');

  }

  // addWord(word: Word): Promise<any> {
  addWord(word: Word) {
    return this.wordsCollection.add(word);
    // console.log(this.database.list('tel').push('test'))
  }

  getAllWords(): Observable<Word[]>{
    return this.words = this.wordsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Word;
        const id = a.payload.doc.id;
        // const word = new Word();

        // // refactror
        // Object.assign(word, data, { id });

        // return word;
        return { id, ...data };
      }))
    );
  }

  // editWord(word: string) {}

  // editTranslation(translation: string) {}

  // editDescription(description: string) {}

  removeWord(wordId: string): Promise<any> {
    this.wordDoc = this.db.doc<Word>(`words/${wordId}`);
    return this.wordDoc.delete();
  }

  // removeFromQuiz(wordId: string) {}

  // addToQuiz(wordId: string) {}
}
