export class Word {
  public id: string;
  public translation: string;
  public definition: string;
  public description: string;
  public quiz: boolean;
  public answeredCorrectly: number;
  public answeredInCorrectly: number;

  constructor(
  ) {
    this.id = null;
    this.translation = '';
    this.definition = '';
    this.description = '';
    this.quiz = true;
    this.answeredCorrectly = 0;
    this.answeredInCorrectly = 0;
  }
}

