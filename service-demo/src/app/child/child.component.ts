import { Component, OnInit } from '@angular/core';
import { InteractionService } from '../interaction.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor(private _interactionService: InteractionService) { }

  ngOnInit() {
    this._interactionService.teacherMessage$
    .subscribe(
      message => {
        if(message === 'Good Morning'){
          alert('Good Morning teacher');
        } else if(message === 'well Done'){
          alert('Thank you teacher');
        }
      }
    );
  }

}
