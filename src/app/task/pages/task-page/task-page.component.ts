import { Component } from '@angular/core';
import { ListTaskComponent } from '../../components/list-task/list-task.component';

@Component({
  selector: 'app-task-page',
  standalone: true,
  imports: [ListTaskComponent],
  templateUrl: './task-page.component.html',
  styleUrl: './task-page.component.css'
})
export class TaskPageComponent {

}
