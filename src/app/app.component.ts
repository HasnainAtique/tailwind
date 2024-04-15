import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PracticeComponent } from '../components/practice/practice.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,PracticeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tailwind-css';
}
