import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-draft',
  templateUrl: 'draft.component.html'
})
export class DraftComponent implements OnInit {
  constructor() {
    console.log('cons - DraftComponent');
   }

  ngOnInit() {
    console.log('ngOnInit - DraftComponent');
   }

}
