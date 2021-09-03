import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptFormsModule, NativeScriptModule } from '@nativescript/angular';
import { CurrentChallengeComponent } from './current-challenge/current-challenge.component';
import { ChallengeEditComponent } from './challenge-edit/challenge-edit.component'

@NgModule({
  imports: [NativeScriptModule, NativeScriptFormsModule],
  declarations: [CurrentChallengeComponent, ChallengeEditComponent],
  providers: [],
  exports: [ CurrentChallengeComponent, ChallengeEditComponent ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class ChallengesModule {}
