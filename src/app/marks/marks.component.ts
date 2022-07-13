import { TitleCasePipe } from '@angular/common';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-marks',
  templateUrl: './marks.component.html',
  styleUrls: ['./marks.component.scss']
})
export class MarksComponent implements OnInit {

  @Output() updateMarks = new EventEmitter();

  public marks:Array<any> = [{title: 'Main', position: [50.661574, 30.573856]}];

  constructor() { }

  public addMark(title: string, coor1: string, coor2: string){
    this.marks.push({title: title, position: [Number(coor1), Number(coor2)]});
    this.updateMarks.emit(this.marks);
  }

  ngOnInit(): void {
  }

}
