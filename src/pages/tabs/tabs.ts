import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { ListPage } from '../list/list';
import { QuizPage } from '../quiz/quiz';

/**
 * Generated class for the TabsPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  homeRoot = 'HomePage'
  listRoot = 'ListPage'
  quizRoot = 'QuizPage'


  constructor() {}

}
