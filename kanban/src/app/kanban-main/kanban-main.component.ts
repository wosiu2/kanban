import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-kanban-main',
  templateUrl: './kanban-main.component.html',
  styleUrls: ['./kanban-main.component.css']
})
export class KanbanMainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  open = [
    {text:"abcd",value:123},
    {text:"abcd",value:123},
    {text:"abcd",value:123},
    {text:"abcd",value:123},
    {text:"abcd",value:123},
    {text:"abcd",value:123},
  ];

  approved = [
 
  ];

  processed = [
 
  ];

  closed = [
 
  ];
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
  testapp(){
    console.log('dadasdasdasasd');
  }
}
