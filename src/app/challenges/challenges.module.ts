import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptFormsModule, NativeScriptModule } from '@nativescript/angular';
import { CurrentChallengeComponent } from './current-challenge/current-challenge.component'

@NgModule({
  imports: [NativeScriptModule, NativeScriptFormsModule],
  declarations: [CurrentChallengeComponent],
  providers: [],
  exports: [ CurrentChallengeComponent ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class ChallengesModule {}
