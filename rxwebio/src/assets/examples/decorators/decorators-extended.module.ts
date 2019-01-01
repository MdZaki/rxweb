import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { PropObjectComponent } from './propObject/propObject.component';
import { PropArrayAddComponent } from "src/assets/examples/decorators/propArray/prop-array-add.component";
import { PropComponent } from './prop/prop.component';

@NgModule({
  declarations: [
	PropComponent,
	PropArrayAddComponent,
	PropObjectComponent
  ],
entryComponents: [
    PropComponent,
	PropArrayAddComponent,
	PropObjectComponent
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule
  ],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    PropComponent,
    PropArrayAddComponent,
	PropObjectComponent,
  ],

})
export class DecoratorsExtendedModule { }
