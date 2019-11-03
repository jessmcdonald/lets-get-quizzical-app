import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Question } from '../quiz.model';

//decorator tells angular that class below is a component
@Component({
  //defines custom HTML element this component will render into
  //can be used in HTML files with <app-question-form></app-question-form>
  selector: 'app-question-form',
  //instructions to wire this class to its template file & stylesheet
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.scss']
})
export class QuestionFormComponent implements OnInit {
  //more decorators define components input&output - kind of equivalent to React props
  @Input() question: Question;
  @Output() onChoiceMade = new EventEmitter<string>(); //generic type allows to express what data EventEmitter will carry

  form: FormGroup;

  //called once component recieved inputs (&all data-bound properites) from calling component
  ngOnInit() {
    //initialise form controller - link model & view
    this.form = new FormGroup({
      choice: new FormControl()
    });

    //wire form controller with onChange method
    this.form.valueChanges.subscribe(this.onChange);
  }

  //dispatch choice made by user
  onChange = () => {
    this.onChoiceMade.emit(this.form.value.choice);
  }
}
