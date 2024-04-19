import { CommonModule } from '@angular/common';
import { Component, HostListener, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-temp2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './temp2.component.html',
  styleUrl: './temp2.component.css'
})
export class Temp2Component {
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
