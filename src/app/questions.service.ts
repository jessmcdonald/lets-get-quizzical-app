import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Quiz, Question } from './quiz.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor(private http: HttpClient) { }

  public getQuizzes() {
    //load data through http client
    return this.http.get(`./assets/quiz-list.json`).pipe(
      //map result to return observable quiz instances
      map((result: any[]) => {
        //transform what is loaded into proper model using "new" syntax, imports Quiz model to do this
        return result.map(r => new Quiz(r.label, r.name, r.description, r.fileName));
      })
    );
  }

  public getQuestions(fileName: string) {
    return this.http.get(`./assets/${fileName}.json`).pipe(
      map((result: any[]) => {
        return result.map(r => new Question(r.label, r.choices));
      })
    );
  }
}

