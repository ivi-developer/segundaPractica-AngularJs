import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskPageComponent } from './task/pages/task-page/task-page.component';
import { ParentComponent } from './pruebaInput/parent/parent.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TaskPageComponent, ParentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'practicaForms';
}
