import { Component, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private changeDetection: ChangeDetectorRef){

  }

  public marks = '';

  public updateMarks(event: any){
    this.marks = JSON.stringify(event);
    console.log(this.marks);
  }

  title = 'semeteryNavigator';
}
