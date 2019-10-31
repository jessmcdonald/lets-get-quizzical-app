import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../questions.service'
import { Quiz } from '../quiz.model';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  //local variable
  quiz: Quiz[];

  constructor(public questionsService: QuestionsService) { }

  //subscribe to questionsService method from questions.service file
  //set what's returned to local variable quiz
  ngOnInit() {
    this.questionsService.getQuizzes().subscribe(quiz => { this.quiz = quiz })
  }

}
