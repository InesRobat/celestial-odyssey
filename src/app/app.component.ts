import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'celestial-odyssey';

  isBlueText: boolean = true;
  isRedText: boolean = false;
  showImage1: boolean = true;
  showImage2: boolean = false;

  onMouseWheel(event: any): void {
    event.preventDefault();

    if (event.deltaY > 0) {
      // Scrolling down
      this.isBlueText = false;
      this.isRedText = true;
      this.showImage1 = false;
      this.showImage2 = true;
    } else {
      // Scrolling up
      this.isBlueText = true;
      this.isRedText = false;
      this.showImage1 = true;
      this.showImage2 = false;
    }
  }

}
