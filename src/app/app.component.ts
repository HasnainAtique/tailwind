import { Component,HostListener, Renderer2 } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PracticeComponent } from '../components/practice/practice.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,PracticeComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tailwind-css';
  showMobileMenu: boolean = false;
  constructor(private renderer: Renderer2) { }
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.onResize1(event);
  }
  showMenu(show: boolean) {
    this.showMobileMenu = show
  }
  onResize1(event: any) {
    if (window.innerWidth < 640) {
      this.showMobileMenu = true;
    } else {
      this.showMobileMenu = false;

    }
  }
}
