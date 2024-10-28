import { Component, EventEmitter, Output } from '@angular/core';
import { Task } from '../../interface/tarea.interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
  task: Task = {
    name: ''
  }

  @Output()
  emitTaskEvent: EventEmitter<Task> = new EventEmitter()

  emitTask() {
    this.emitTaskEvent.emit({ ...this.task })
  }
}
