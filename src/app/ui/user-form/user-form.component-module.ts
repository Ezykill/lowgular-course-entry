import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { UserFormComponent } from './user-form.component';

@NgModule({
  imports: [ReactiveFormsModule],
  declarations: [UserFormComponent],
  providers: [],
  exports: [UserFormComponent]
})
export class UserFormComponentModule {
}
