import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators } from "@angular/forms"
import { DigitalInfo } from './digital-info.model';

@Component({
    selector: 'app-grid-add-template-driven-validation-decorators',
    templateUrl: './grid-add.component.html'
})
export class GridAddTemplateDrivenValidationDecoratorsComponent implements OnInit {
    digitalinfo: DigitalInfo
	
    constructor(
    ) { }

    ngOnInit() {
       this.digitalinfo= new DigitalInfo()
    }
}
