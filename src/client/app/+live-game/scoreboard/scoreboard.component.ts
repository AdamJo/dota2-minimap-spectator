import { Component, OnInit, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-scoreboard',
  templateUrl: 'scoreboard.component.html',
  styleUrls: ['scoreboard.component.css']
})
export class ScoreboardComponent implements OnInit {
  @Input() scoreboard: any;
  
  constructor() { }

  ngOnInit() {
    
  }
  ngOnChanges() {
    this.scoreboard.dire.players.forEach((element:any) => {
      console.log(element)
    });
  }

}