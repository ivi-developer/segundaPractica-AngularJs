import { Component } from '@angular/core';
import { Task } from '../../interface/tarea.interface';
import { AddTaskComponent } from '../add-task/add-task.component';

@Component({
  selector: 'app-list-task',
  standalone: true,
  imports: [AddTaskComponent],
  templateUrl: './list-task.component.html',
  styleUrl: './list-task.component.css'
})
export class ListTaskComponent {
  taskList: Task[] = [
    {
      id: 1,
      name: 'practicar',
      description: 'horas silla cola'
    },
    {
      id: 2,
      name: 'dataBase',
      description: 'ponerse las pilas con db'
    }
  ]
  addTask(task: Task) {
    this.taskList.push(task)
  }
}
