import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IAnswer } from '../interfaces';

@Component({
  selector: 'answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.css']
})
export class AnswersComponent implements OnInit {

  @Input() index: number;
  @Input() answerSets: IAnswer[][];

  @Output() onNextClicked = new EventEmitter<number>()
  @Output() onPrevClicked = new EventEmitter<number>()
  @Output() correctScore = new EventEmitter<number>()

  isAnswered: boolean;

  constructor() { }

  ngOnInit() {
    console.log(this.index);
  }

  onQuestionAnswered() {
    this.isAnswered = true;
  }

  nextBtn() {
    this.onNextClicked.emit()
    this.isAnswered = false;
  }

  previousBtn() {
    this.onPrevClicked.emit()
    this.isAnswered = false;
  }

  answerSelected(correct) {
    this.correctScore.emit(correct)
  }
}