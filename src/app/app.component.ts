import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'portfolio';
  constructor(private window: Window) {}

  ngOnInit(): void {
    this.window.onscroll = () => {
      this.showScrollTopBtn();
    }
  }
  showScrollTopBtn() {
    return this.window.scrollY > 300;
  }
  scrollToTop() {
    return window.scrollTo(0, 0);
  }
}
