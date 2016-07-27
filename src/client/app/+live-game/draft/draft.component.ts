import { Component, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-draft',
  templateUrl: 'draft.component.html',
  styleUrls: ['draft.component.css']
})
export class DraftComponent {

  @Input() radiant: any;
  @Input() dire: any;

  constructor() {
    console.log('cons - DraftComponent');
  }
}
