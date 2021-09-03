import { Component, Input } from '@angular/core'

@Component({
  selector: 'ns-current-challenge',
  styleUrls: ['./current-challenge.component.css'],
  templateUrl: './current-challenge.component.html',
})
export class CurrentChallengeComponent {

  // challengeField: string ="";
  @Input() currentChallenge: string;

  // onSetChallenge() {
  //   this.currentChallenge = this.challengeField;
  // }
}
