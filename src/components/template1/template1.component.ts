import { CommonModule } from '@angular/common';
import { Component, HostListener, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-template1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './template1.component.html',
  styleUrl: './template1.component.css'
})
export class Template1Component {
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
    if (window.innerWidth < 768) {
      this.showMobileMenu = true;
    }
  }
}
