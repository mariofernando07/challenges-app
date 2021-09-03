import { Component } from '@angular/core'

@Component({
  selector: 'ns-app',
  templateUrl: './app.component.html',
})
export class AppComponent {
  currentChallenge: string = "";

  getChallenge(challenge: string) {
    this.currentChallenge = challenge;
  }
}
