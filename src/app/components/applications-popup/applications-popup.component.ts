import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
selector: 'app-applications-popup',
templateUrl: './applications-popup.component.html',
styleUrls: ['./applications-popup.component.css']
})
export class ApplicationsPopupComponent {
@Input() isOpen: boolean;
@Input() applications: any[];
@Output() close = new EventEmitter<void>();

constructor() { }

closePopup() {
  this.close.emit();
}
}
