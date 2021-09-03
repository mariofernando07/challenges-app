import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ns-challenge-edit',
  templateUrl: './challenge-edit.component.html',
  styleUrls: ['./challenge-edit.component.css']
})
export class ChallengeEditComponent implements OnInit {
  
  challengeField: string ="";
  @Output() input = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onSetChallenge() {
    this.input.emit(this.challengeField);
  }

}
