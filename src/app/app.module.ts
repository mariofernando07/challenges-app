import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptFormsModule, NativeScriptModule } from '@nativescript/angular'

import { AppComponent } from './app.component'
import { ChallengesModule } from './challenges/challenges.module';
import { StackComponent } from './layouts/stack/stack.component';
import { FlexboxComponent } from './layouts/flexbox/flexbox.component';
import { GridComponent } from './layouts/grid/grid.component';
import { AbsoluteComponent } from './layouts/absolute/absolute.component'
 
@NgModule({
  bootstrap: [AppComponent],
  imports: [NativeScriptModule, ChallengesModule, NativeScriptFormsModule],
  declarations: [AppComponent, StackComponent, FlexboxComponent, GridComponent, AbsoluteComponent],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
