import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {
  tasks: any[] = [];
  taskTitle: string = "";

  constructor() {}

  addTask() {
    if (this.taskTitle.length > 0) {
      let task = {title:this.taskTitle}
      this.tasks.push(task)
      this.taskTitle = ""
    }
  }

}
