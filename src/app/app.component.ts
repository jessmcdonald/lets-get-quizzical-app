import { Component } from '@angular/core';
import { QuestionsService } from './questions.service';
import { Quiz, Answers, Choice } from './quiz.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lets-get-quizzical-app';

  private answers: Answers;
  private quiz: Quiz;
  private currentQuestionIndex: number;
  private showResults = false;

  //load data using QuestionsService
  constructor(private questionsService: QuestionsService) {
    this.questionsService.getJSON('quotes').subscribe(data => {

      this.quiz = new Quiz('quotes', data);
      this.answers = new Answers();
      this.currentQuestionIndex = 0;
    });
  }

  //will be caled each time user selects answer
  updateChoice(choice: Choice) {
    this.answers.values[this.currentQuestionIndex] = choice;
  }

  //will be caled each time user clicks next button
  nextOrViewResults() {
    if (this.currentQuestionIndex === this.quiz.questions.length - 1) {
      this.showResults = true;
      return;
    }

    this.currentQuestionIndex++;
  }
}
